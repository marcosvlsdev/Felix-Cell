import React from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-12 lg:pt-40 lg:pb-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          <div className="lg:w-1/2 space-y-8 animate-in slide-in-from-left-5 duration-700">
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium border border-blue-100">
                <CheckCircle size={14} />
                <span>Garantia em todos os serviços</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-white text-sm font-bold border border-secondary-dark shadow-lg ">
                <Zap size={14} />
                <span>Concerto na hora!</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Seu celular novo de novo. <br/>
              <span className="text-primary">Rápido, seguro e com garantia.</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Conserto especializado em iPhone, Samsung e multímarcas com peças de alta qualidade e técnicos certificados. Seu aparelho pronto em até 1 hora.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5511973693204" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 shadow-lg shadow-primary/20 cursor-pointer">
                  Quero um orçamento agora
                  <ArrowRight size={20} />
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" size="lg" className="cursor-pointer">
                  Ver serviços
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />
                <span>Orçamento grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />
                <span>Peças originais</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 animate-in slide-in-from-right-5 duration-700 delay-200">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-20 blur-3xl rounded-full" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-4 border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Image Placeholder */}
                <div className="bg-gray-100 rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                   <img 
                    src="/hero-repair.jpg" 
                    alt="Técnico consertando celular" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                   />
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce duration-1000">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Avaliações Google</p>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-gray-900">4.8/5.0</span>
                    <div className="flex text-yellow-400 text-xs">★★★★★</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
