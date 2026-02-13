
# Reposicionamento: Qualidade > Quantidade

## Objetivo

Atualizar todo o copy do site (nas 3 linguas) para remover referencias a "escalar", "multiplicar producao" e "15+ videos por dia", substituindo por mensagens focadas em **qualidade, organizacao, gestao do tempo e conteudo profissional**. A estrutura de pagina unica permanece igual -- apenas os textos mudam.

## Nenhum componente precisa ser alterado

Todos os componentes ja usam `t()` do react-i18next. As mudancas sao 100% nos arquivos JSON de traducao.

## Arquivos a editar

- `src/i18n/locales/pt-BR.json`
- `src/i18n/locales/en.json`
- `src/i18n/locales/es.json`

## Todas as mudancas de copy

### Hero

| Chave | Atual (PT-BR) | Novo (PT-BR) |
|-------|---------------|--------------|
| hero.title1 | "Organize, Planeje e Escale" | "Organize, Planeje e Crie com Qualidade" |
| hero.subtitle | "Centralize prompts, roteiros, thumbnails e multiplique sua producao." | "Centralize prompts, roteiros, thumbnails e otimize seu processo criativo." |
| hero.subtitleHighlight | "De 1 video por dia para 15+ videos." | "Mais tempo para criar conteudo que realmente performa." |
| hero.trust.videos | "10K+ Videos organizados" | "10K+ Projetos organizados" |

| Chave | Atual (EN) | Novo (EN) |
|-------|-----------|-----------|
| hero.title1 | "Organize, Plan & Scale" | "Organize, Plan & Create with Quality" |
| hero.subtitle | "...multiply your production." | "...optimize your creative process." |
| hero.subtitleHighlight | "From 1 video per day to 15+ videos." | "More time to create content that truly performs." |
| hero.trust.videos | "10K+ Organized Videos" | "10K+ Organized Projects" |

(ES segue o mesmo padrao)

### HowItWorks

| Chave | Atual | Novo |
|-------|-------|------|
| howItWorks.subtitle (PT) | "...eliminam o caos e multiplicam sua producao" | "...eliminam o caos e elevam a qualidade do seu conteudo" |
| howItWorks.subtitle (EN) | "...eliminate chaos and multiply your production" | "...eliminate chaos and elevate your content quality" |

### ProblemSolution

| Chave | Atual | Novo |
|-------|-------|------|
| problemSolution.solutionSubtitle (PT) | "Sistema profissional para organizar e escalar seus canais" | "Sistema profissional para organizar e criar conteudo de qualidade" |
| problemSolution.problems.production.title (PT) | "Producao travada" | "Sem planejamento" |
| problemSolution.problems.production.description (PT) | "So consegue 2-3 videos/semana enquanto concorrentes passam na frente." | "Cria sem storyboard nem estrategia. Conteudo amador que o YouTube nao recomenda." |
| problemSolution.solutions.scale.title (PT) | "Escale producao" | "Crie com qualidade" |
| problemSolution.solutions.scale.description (PT) | "De 2-3 videos por semana para 15+ videos." | "Storyboard, roteiro estruturado e audio profissional em cada video." |

(EN e ES com equivalentes)

### Comparison

| Chave | Atual | Novo |
|-------|-------|------|
| comparison.title (PT) | "A diferenca entre" | "A diferenca entre" |
| comparison.titleHighlight1 (PT) | "1 video" | "conteudo amador" |
| comparison.titleHighlight2 (PT) | "5 por dia" | "conteudo profissional" |
| comparison.with.items[4] (PT) | "Economiza 8+ horas e produz 3-5x mais" | "Economiza horas e cria conteudo que o YouTube recomenda" |

(EN e ES com equivalentes)

### CTA e FinalCTA

| Chave | Atual | Novo |
|-------|-------|------|
| cta.titleHighlight (PT) | "multiplicar" | "profissionalizar" |
| cta.subtitle (PT) | "...aprenda a escalar de verdade." | "...aprenda a criar com qualidade de verdade." |
| finalCta.cta.titleHighlight (PT) | "multiplique seus resultados" | "profissionalize seus resultados" |
| finalCta.cta.description (PT) | "...outros creators ja estao escalando com o Dark Planner." | "...outros creators ja estao criando com qualidade usando o Dark Planner." |

(EN e ES com equivalentes)

### ToolsGrid

| Chave | Atual | Novo |
|-------|-------|------|
| toolsGrid.subtitle (PT) | "Tudo que voce precisa para escalar seus canais Dark" | "Tudo que voce precisa para criar conteudo profissional" |

### CreatorsFocus

| Chave | Atual | Novo |
|-------|-------|------|
| creatorsFocus.benefits.group.description (PT) | "WhatsApp com creators que escalam canais Dark. Networking real." | "WhatsApp com creators que criam conteudo Dark de qualidade. Networking real." |

### SocialProof (depoimentos)

| Chave | Atual | Novo |
|-------|-------|------|
| socialProof.testimonials.carlos.content (PT) | "...Producao subiu 300%." | "...Qualidade e organizacao subiram demais." |
| socialProof.testimonials.marcos.content (PT) | "...Escalo sem contratar ninguem." | "...Crio conteudo profissional sozinho." |

### CreatorStory

| Chave | Atual | Novo |
|-------|-------|------|
| creatorStory.story.p3b (PT) | "minha producao triplicou" | "a qualidade dos meus videos disparou" |
| creatorStory.story.p4 (PT) | "...creators que estao escalando de verdade." | "...creators que estao criando conteudo de qualidade de verdade." |

## Resultado

O site mantem exatamente a mesma estrutura, componentes e fluxo de conversao. Apenas o posicionamento muda de **"faca mais videos"** para **"faca videos melhores com organizacao profissional"**, alinhando com as novas diretrizes do YouTube contra canais de baixa qualidade.
