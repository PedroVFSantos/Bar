import { type LucideIcon, Calendar, QrCode, Trophy, Users, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Defina a interface para o objeto do evento
interface Event {
  id: number;
  title: string;
  description: string;
  day: string;
  time: string;
  icon: LucideIcon; // <-- Tipo explícito para o ícone
  highlight: boolean;
}

const Events = () => {
  // Use a interface para tipar o array
  const events: Event[] = [
    {
      id: 1,
      title: "Bingo Tupperware",
      description: "Toda sexta-feira às 20h com prêmios incríveis!",
      day: "Sabádos",
      time: "20:00",
      icon: Trophy,
      highlight: true
    },
    {
      id: 2,
      title: "Jogo do Bicho Local",
      description: "Venha e participe",
      day: "Diário",
      time: "21:00",
      icon: Users,
      highlight: false
    },
    {
      id: 3,
      title: "Jogo do Bicho Digital",
      description: "Participe via QR Code pelo seu celular",
      day: "Diário",
      time: "18:00",
      icon: QrCode,
      highlight: false
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-background to-bar-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos
            <span className="text-bar-primary ml-3">Eventos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Diversão garantida com jogos, bingos e entretenimento para toda família. 
            Use nossos QR Codes para participar dos jogos digitais!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event) => {
            const IconComponent = event.icon;
            return (
              <Card 
                key={event.id} 
                className={`group hover:shadow-xl transition-all duration-300 border-2 ${
                  event.highlight 
                    ? 'border-bar-primary bg-bar-primary/5' 
                    : 'border-border hover:border-bar-primary/50'
                }`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-bar-primary/10 rounded-full flex items-center justify-center group-hover:bg-bar-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-bar-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{event.day}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  {event.highlight && (
                    <div className="bg-bar-warm/10 text-bar-warm px-3 py-1 rounded-full text-sm font-medium">
                      Evento Principal
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-bar-primary/10 to-bar-warm/10 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <QrCode className="w-16 h-16 text-bar-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Participe via QR Code
              </h3>
              <p className="text-muted-foreground mb-6">
                Escaneie o QR Code na mesa e participe dos nossos jogos digitais! 
                Simples, rápido e divertido.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-bar-primary flex-shrink-0" />
                <span className="text-sm">Mesa com QR Code</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-bar-primary flex-shrink-0" />
                <span className="text-sm">Para toda família</span>
              </div>
            </div>
            
            <Button size="lg" className="bg-bar-primary hover:bg-bar-primary/90">
              Saiba Mais Sobre os Eventos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;