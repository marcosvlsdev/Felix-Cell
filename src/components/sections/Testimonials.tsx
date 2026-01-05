import React from 'react';
import { Container } from '../layout/Container';
import { Card } from '../ui/Card';
import { Star, Quote } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Mariana Silva',
      role: 'iPhone 13 Pro',
      content: 'Achei que tinha perdido meu iPhone depois que caiu na piscina. A Felix Cell recuperou em 1 dia! Serviço impecável.',
      rating: 5
    },
    {
      name: 'Carlos Mendes',
      role: 'Samsung S22',
      content: 'Atendimento rápido e preço justo. Trocaram a tela do meu Samsung em 40 minutos. Recomendo muito!',
      rating: 5
    },
    {
      name: 'Fernanda Costa',
      role: 'Motorola Edge',
      content: 'Profissionais honestos. Outra assistência condenou minha placa, mas eles resolveram com um reparo simples.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-12 lg:py-20 bg-gray-50">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          <div className="lg:w-1/3">
            <Badge variant="info" className="mb-4">Prova Social</Badge>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">
              O que dizem nossos clientes
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Junte-se a milhares de clientes satisfeitos que confiaram seus aparelhos à nossa equipe.
            </p>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="text-4xl font-bold text-primary">5k+</div>
              <div className="text-sm text-gray-500">
                <span className="block font-bold text-gray-900">Aparelhos Recuperados</span>
                com 98% de satisfação
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="relative pt-12">
                <div className="absolute top-6 left-6 text-primary/20">
                  <Quote size={32} />
                </div>
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{t.content}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <span className="text-xs text-secondary font-medium">{t.role}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
