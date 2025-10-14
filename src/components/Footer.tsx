export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-black text-sm">DP</span>
              </div>
              <span className="font-bold text-lg">Dark Planner</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Sistema completo para creators de canais faceless.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Recursos</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Termos</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Dark Planner. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
