import React from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { MessageCircle, Star } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-12 lg:py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2574&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90" />
      
      <Container className="relative z-10 text-center">
        <h2 className="text-2xl lg:text-5xl font-bold text-white mb-6">
          Não fique sem seu celular
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Faça um orçamento agora mesmo e tenha seu aparelho novo de novo ainda hoje. Atendimento rápido e personalizado.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a href="https://wa.me/5511973693204" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6 shadow-xl shadow-secondary/20 hover:shadow-secondary/30 transform hover:-translate-y-1 transition-all w-full md:w-auto">
              <MessageCircle size={24} />
              Falar no WhatsApp agora
            </Button>
          </a>
          
          <a href="https://share.google/NeEc9LvYsKHIAqa4n" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6 text-white border-white hover:bg-white/10 transform hover:-translate-y-1 transition-all w-full md:w-auto">
              <Star size={24} />
              Nos Avalie no Google
            </Button>
          </a>
        </div>
     
      </Container>
    </section>
  );
};
