import React from 'react';
import { Container } from '../layout/Container';
import { Card } from '../ui/Card';
import { Smartphone, Battery, Cpu, Droplets } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Troca de Tela',
      description: 'Vidro quebrado? Trocamos sua tela mantendo a qualidade original de toque e imagem.'
    },
    {
      icon: <Battery className="w-10 h-10" />,
      title: 'Substituição de Bateria',
      description: 'Seu celular descarrega rápido? Trocamos sua bateria por uma nova com saúde 100%.'
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: 'Reparo em Placa',
      description: 'Recuperação avançada de circuitos, conectores de carga e componentes internos.'
    },
    {
      icon: <Droplets className="w-10 h-10" />,
      title: 'Desoxidação',
      description: 'Caiu na água? Realizamos limpeza química para recuperar aparelhos molhados.'
    }
  ];

  return (
    <section id="services" className="py-12 lg:py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12 lg:mb-16 max-w-2xl mx-auto">
          <span className="text-secondary font-bold text-sm tracking-uppercase mb-2 block tracking-wider">NOSSOS SERVIÇOS</span>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">Soluções completas para seu smartphone</h2>
          <p className="text-gray-600">
            Resolvemos desde problemas simples até os mais complexos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Card key={index} hoverEffect className="group cursor-pointer h-full flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>

            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
