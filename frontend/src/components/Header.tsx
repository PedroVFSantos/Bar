import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-bar-secondary">
              Bar & Lanchonete
              <span className="text-bar-primary ml-2">Paulista</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-bar-primary transition-colors font-medium">
              Início
            </a>
            <a href="#about" className="text-foreground hover:text-bar-primary transition-colors font-medium">
              Sobre Nós
            </a>
            <a href="#products" className="text-foreground hover:text-bar-primary transition-colors font-medium">
              Produtos
            </a>
            <a href="#events" className="text-foreground hover:text-bar-primary transition-colors font-medium">
              Eventos
            </a>
            <a href="#contact" className="text-foreground hover:text-bar-primary transition-colors font-medium">
              Contato
            </a>
          </nav>

          {/* Login Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Entrar</span>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-foreground hover:text-bar-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-foreground hover:text-bar-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-bar-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </a>
              <a 
                href="#products" 
                className="text-foreground hover:text-bar-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </a>
              <a 
                href="#events" 
                className="text-foreground hover:text-bar-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Eventos
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-bar-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <Button variant="outline" className="w-fit flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Entrar</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;