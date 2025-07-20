import { type LucideIcon, Beer, Coffee, Sandwich, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Defina a interface para o objeto de categoria
interface Category {
  icon: LucideIcon; // <-- Tipo explícito para o ícone
  title: string;
  description: string;
  color: string;
}

const ProductsPreview = () => {
  // Use a interface para tipar o array
  const categories: Category[] = [
    {
      icon: Beer,
      title: "Bebidas",
      description: "Cervejas geladas, refrigerantes, sucos naturais e drinks",
      color: "bar-primary"
    },
    {
      icon: Sandwich,
      title: "Lanches",
      description: "Lanches Assados, sanduíches",
      color: "bar-warm"
    },
    {
      icon: Cookie,
      title: "Petiscos",
      description: "Coxinha, pastel, croquete e muito mais",
      color: "bar-secondary"
    },
    {
      icon: Coffee,
      title: "Cafeteria",
      description: "Café expresso,pingado e doces",
      color: "bar-primary"
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-bar-primary font-semibold text-lg mb-2">NOSSOS PRODUTOS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-bar-secondary mb-6">
            Sabores que
            <span className="text-bar-primary"> Conquistam</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa seleção especial de bebidas, lanches e petiscos 
            preparados com ingredientes frescos e muito carinho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 bg-${category.color}/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-bar-secondary">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-bar-primary hover:bg-bar-primary/90 text-primary-foreground shadow-warm transition-all duration-300 hover:scale-105"
          >
            Ver Cardápio Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;