import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden mb-4 bg-white shadow-sm">
      <button 
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900">{question}</span>
        {isOpen ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 bg-gray-50/50">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'Quanto tempo demora o conserto?',
      answer: 'A maioria dos serviços, como troca de tela e bateria, é realizada entre 40 minutos e 2 horas. Reparos em placa podem levar de 1 a 3 dias úteis para análise detalhada e testes.'
    },
    {
      question: 'As peças são originais?',
      answer: 'Trabalhamos com peças de qualidade Premium e Originais (retiradas), sempre oferecendo a melhor opção custo-benefício para seu aparelho com total transparência.'
    },
    {
      question: 'Qual a garantia dos serviços?',
      answer: 'Oferecemos 90 dias (3 meses) de garantia legal para todos os serviços de troca de peças e reparos em placa.'
    },
    {
      question: 'Preciso agendar horário?',
      answer: 'Não é obrigatório, mas recomendamos para garantir atendimento imediato. Você pode agendar via WhatsApp ou simplesmente vir até nossa loja.'
    },
    {
      question: 'Vocês buscam o aparelho em casa?',
      answer: 'Sim! Temos serviço de leva e traz para toda a região. Consulte a taxa de deslocamento para seu bairro no WhatsApp.'
    }
  ];

  return (
    <section id="faq" className="py-12 lg:py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">Dúvidas Frequentes</h2>
          <p className="text-gray-600">Tudo o que você precisa saber antes de consertar seu celular.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </Container>
    </section>
  );
};
