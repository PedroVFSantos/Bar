import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bar-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Bar & Lanchonete
              <span className="text-bar-primary block">Paulista</span>
            </h3>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Tradição familiar há quase 20 anos servindo o melhor que há em  
              sabores paulistanos com qualidade e carinho. Oferecemos eventos 
              especiais com jogos, bingos e QR codes para uma experiência única.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-bar-warm">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-bar-primary" />
                <span className="text-sm">Rua Benedito Justino, 221 - Jd Paulista, Monte Mor - SP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-bar-primary" />
                <span className="text-sm">(19) 9 98765-3402</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-bar-warm">Funcionamento</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-bar-primary" />
                <div className="text-sm">
                  <p>Seg - Sex: 08h às 21h</p>
                  <p>Sáb - Dom: 08h às 14h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-bar-warm">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-bar-primary/10 rounded-full flex items-center justify-center hover:bg-bar-primary hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-bar-primary/10 rounded-full flex items-center justify-center hover:bg-bar-primary hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © 2025 Bar & Lanchonete Paulista. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;