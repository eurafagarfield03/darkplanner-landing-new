import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Dark Planner Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-xl" />
            <span className="font-bold text-lg">Dark Planner</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Sistema completo para creators de canais faceless.
          </p>
          
          <div className="pt-6 border-t border-border w-full max-w-2xl">
            <p className="text-sm text-muted-foreground mb-2">© 2025 Dark Planner • Todos os direitos reservados</p>
            <p className="text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Termos de uso</a>
              {" • "}
              <a href="#" className="hover:text-foreground transition-colors">Política de privacidade</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
