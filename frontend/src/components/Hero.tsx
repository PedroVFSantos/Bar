import { Play, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFood from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-bar-neutral to-muted py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-6xl lg:text-7xl font-bold text-bar-secondary leading-tight">
                Saboreie o
                <span className="block text-bar-primary">Melhor de</span>
                <span className="block text-bar-warm">Monte Mor</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Tradição familiar há quase 20 anos servindo os melhores 
                petiscos, lanches e bebidas geladas da região.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-bar-primary hover:bg-bar-primary/90 text-primary-foreground shadow-warm transition-all duration-300 hover:scale-105"
              >
                <Coffee className="w-5 h-5 mr-2" />
                Ver Produtos
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-bar-secondary text-bar-secondary hover:bg-bar-secondary hover:text-secondary-foreground transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Nossa História
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-bar-primary/20 to-bar-warm/20 rounded-full blur-3xl"></div>
              <img
                src={heroFood}
                alt="Deliciosos petiscos e bebidas do nosso bar"
                className="relative z-10 w-full max-w-md mx-auto rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;