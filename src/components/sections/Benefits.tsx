import React from 'react';
import { Container } from '../layout/Container';
import { ShieldCheck, Zap, Award, Banknote } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: 'Peças Premium',
      description: 'Utilizamos apenas peças de primeira linha para garantir durabilidade.'
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: 'Reparo Expresso',
      description: 'Troca de tela e bateria em até 40 minutos na maioria dos modelos.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: 'Garantia Estendida',
      description: '3 meses de garantia em todos os serviços realizados.'
    },
    {
      icon: <Banknote className="w-8 h-8 text-primary" />,
      title: 'Orçamento Grátis',
      description: 'Diagnóstico sem custo e sem compromisso para você.'
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-gray-50">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
