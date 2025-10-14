import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-secondary mb-4">
          <span className="text-6xl font-black text-white">404</span>
        </div>
        <h1 className="text-4xl font-black">Página não encontrada</h1>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          Ops! A página que você está procurando não existe.
        </p>
        <Button 
          asChild 
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 mt-6"
        >
          <a href="/">
            <Home className="w-4 h-4 mr-2" />
            Voltar para Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
