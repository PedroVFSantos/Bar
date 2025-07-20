import { Users, Clock, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-bar-primary font-semibold text-lg mb-2">SOBRE NÓS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-bar-secondary mb-6">
            Conheça Nossa
            <span className="text-bar-primary"> História</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Há quase duas décadas, nossa família começou este sonho: criar um 
              espaço acolhedor onde paulistas, paulistanos e visitantes pudessem desfrutar 
              dos melhores sabores da nossa terra.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Começamos como um pequeno bar de bairro e hoje somos referência 
              em petiscos caseiros, lanches artesanais e a famosa cerveja gelada
              que não pode faltar na mesa.
            </p>

            <div className="grid sm:grid-cols-3 gap-8 pt-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-bar-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-bar-primary" />
                </div>
                <h3 className="font-bold text-bar-secondary">14+ Anos</h3>
                <p className="text-sm text-muted-foreground">De tradição</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-bar-warm/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-bar-warm" />
                </div>
                <h3 className="font-bold text-bar-secondary">2000+</h3>
                <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-bar-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-bar-secondary" />
                </div>
                <h3 className="font-bold text-bar-secondary">100%</h3>
                <p className="text-sm text-muted-foreground">Feito com amor</p>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="bg-card rounded-3xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-bar-secondary mb-6">
              O que nos torna especiais
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-bar-primary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-bar-secondary mb-1">
                    Receitas Familiares
                  </h4>
                  <p className="text-muted-foreground">
                    Todos os nossos pratos seguem receitas tradicionais.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-bar-warm rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-bar-secondary mb-1">
                    Ingredientes Frescos
                  </h4>
                  <p className="text-muted-foreground">
                    Selecionamos diariamente os melhores ingredientes 
                    do mercado local para garantir qualidade.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-bar-secondary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-bar-secondary mb-1">
                    Ambiente Familiar
                  </h4>
                  <p className="text-muted-foreground">
                    Um espaço acolhedor onde todos se sentem em casa, 
                    do happy hour ao jantar em família.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;