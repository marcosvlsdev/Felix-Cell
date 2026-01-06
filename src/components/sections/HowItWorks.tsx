import React from 'react';
import { Container } from '../layout/Container';
import { Search, PenTool, CheckCircle, Smartphone, QrCode, Link } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Smartphone size={32} />,
      title: '1. Solicite',
      description: 'Traga seu aparelho ou solicite a busca do seu smartphone direto de sua casa'
    },
    {
      icon: <Search size={32} />,
      title: '2. Diagnóstico',
      description: 'Análise gratuita do aparelho e orçamento.'
    },
    {
      icon: <PenTool size={32} />,
      title: '3. Reparo',
      description: 'Aprovação do orçamento e execução do serviço especializado.'
    },
    {
      icon: <CheckCircle size={32} />,
      title: '4. Pronto!',
      description: 'Receba seu celular testado, limpo e com garantia. No conforto de sua casa.'
    }
  ];

  return (
    <section id="how-it-works" className="py-12 lg:py-20 bg-white">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">Conheça nosso Delivery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Processo simples, transparente e sem burocracia.<br/>
            <span className="text-emerald-600 max-w-2xl mx-auto mb-8">Frete Gratís para a Região de Santo André! </span> 
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-full border border-gray-100 shadow-sm text-gray-700 hover:bg-emerald-50 hover:border-emerald-100 transition-colors">
              <QrCode className="text-emerald-500" size={20} />
              <span className="font-medium">Pix</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-full border border-gray-100 shadow-sm text-gray-700 hover:bg-blue-50 hover:border-blue-100 transition-colors">
              <Link className="text-blue-500" size={20} />
              <span className="font-medium">Link de Pagamento </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-white">
                <div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center text-primary mb-6 shadow-sm z-10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
