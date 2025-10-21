/**
 * Dark Planner - Affiliate Tracking System
 * Captura e propaga IDs de afiliados para checkouts Kirvano
 */

// Configurações
const ATTRIBUTION_MODE: 'first' | 'last' = 'first'; // 'first' = primeiro clique vence, 'last' = último clique vence
const COOKIE_DAYS = 90; // Duração do cookie em dias
const STORAGE_KEY = 'dp_affiliate_data';
const CHECKOUT_HOSTS = ['pay.kirvano.com']; // Domínios de checkout

// Parâmetros reconhecidos como afiliado
const AFFILIATE_PARAMS = ['aff', 'ref', 'kref', 'refid', 'afid', 'affiliate', 'affiliate_id', 'src', 'sck'];

// Parâmetros UTM para preservar
const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id', 'utm_referrer'];

interface AffiliateData {
  aff?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  utm_id?: string;
  utm_referrer?: string;
  timestamp?: number;
  [key: string]: string | number | undefined;
}

/**
 * Captura parâmetros da URL
 */
function captureURLParams(): AffiliateData {
  const params = new URLSearchParams(window.location.search);
  const data: AffiliateData = {};

  // Captura ID de afiliado (aceita vários aliases)
  for (const param of AFFILIATE_PARAMS) {
    const value = params.get(param);
    if (value) {
      data.aff = value;
      break;
    }
  }

  // Captura UTMs
  for (const param of UTM_PARAMS) {
    const value = params.get(param);
    if (value) {
      data[param as keyof AffiliateData] = value;
    }
  }

  if (Object.keys(data).length > 0) {
    data.timestamp = Date.now();
  }

  return data;
}

/**
 * Salva dados em cookie
 */
function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

/**
 * Lê dados do cookie
 */
function getCookie(name: string): string | null {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

/**
 * Salva dados no localStorage e cookie
 */
function saveAffiliateData(data: AffiliateData) {
  if (Object.keys(data).length === 0) return;

  // Verifica atribuição
  const existing = getAffiliateData();
  if (ATTRIBUTION_MODE === 'first' && existing.aff) {
    // Se já existe um afiliado e é first-click, mantém o primeiro
    return;
  }

  // Salva em localStorage
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('Erro ao salvar em localStorage:', e);
  }

  // Salva em cookie
  try {
    setCookie(STORAGE_KEY, JSON.stringify(data), COOKIE_DAYS);
  } catch (e) {
    console.warn('Erro ao salvar em cookie:', e);
  }

  // Expõe no window para debug
  (window as any).__DP_AFF = data;
}

/**
 * Recupera dados salvos
 */
function getAffiliateData(): AffiliateData {
  // Tenta localStorage primeiro
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.warn('Erro ao ler localStorage:', e);
  }

  // Fallback para cookie
  try {
    const cookieData = getCookie(STORAGE_KEY);
    if (cookieData) {
      return JSON.parse(cookieData);
    }
  } catch (e) {
    console.warn('Erro ao ler cookie:', e);
  }

  return {};
}

/**
 * Adiciona parâmetros a uma URL
 */
function appendParamsToURL(url: string, params: AffiliateData): string {
  try {
    const urlObj = new URL(url, window.location.origin);
    
    // Adiciona aff
    if (params.aff && !urlObj.searchParams.has('aff')) {
      urlObj.searchParams.set('aff', params.aff);
    }

    // Adiciona UTMs
    for (const param of UTM_PARAMS) {
      const value = params[param as keyof AffiliateData];
      if (value && typeof value === 'string' && !urlObj.searchParams.has(param)) {
        urlObj.searchParams.set(param, value);
      }
    }

    return urlObj.toString();
  } catch (e) {
    console.warn('Erro ao processar URL:', e);
    return url;
  }
}

/**
 * Verifica se a URL é de checkout
 */
function isCheckoutURL(url: string): boolean {
  try {
    const urlObj = new URL(url, window.location.origin);
    return CHECKOUT_HOSTS.some(host => urlObj.hostname.includes(host));
  } catch (e) {
    return false;
  }
}

/**
 * Reescreve links de checkout na página
 */
function rewriteCheckoutLinks() {
  const affiliateData = getAffiliateData();
  if (!affiliateData.aff) return;

  // Seleciona todos os links
  const links = document.querySelectorAll('a[href]');
  
  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Reescreve apenas links de checkout ou com classe k-checkout
    const hasCheckoutClass = link.classList.contains('k-checkout');
    if (isCheckoutURL(href) || hasCheckoutClass) {
      const newHref = appendParamsToURL(href, affiliateData);
      link.setAttribute('href', newHref);
    }
  });
}

/**
 * Monitora mudanças no DOM para reescrever novos links
 */
function observeDOMChanges() {
  const observer = new MutationObserver((mutations) => {
    let shouldRewrite = false;
    
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        shouldRewrite = true;
      }
    });

    if (shouldRewrite) {
      rewriteCheckoutLinks();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  return observer;
}

/**
 * Inicializa o sistema de rastreamento
 */
export function initAffiliateTracking() {
  // 1. Captura parâmetros da URL ao carregar
  const urlParams = captureURLParams();
  if (Object.keys(urlParams).length > 0) {
    saveAffiliateData(urlParams);
  }

  // 2. Expõe dados para debug
  (window as any).__DP_AFF = getAffiliateData();

  // 3. Reescreve links existentes
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', rewriteCheckoutLinks);
  } else {
    rewriteCheckoutLinks();
  }

  // 4. Monitora novos links
  if (document.body) {
    observeDOMChanges();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      observeDOMChanges();
    });
  }

  console.log('✅ Dark Planner Affiliate Tracking iniciado');
}

/**
 * Função helper para criar links de checkout manualmente
 */
export function getCheckoutURL(baseUrl: string): string {
  const affiliateData = getAffiliateData();
  return appendParamsToURL(baseUrl, affiliateData);
}
