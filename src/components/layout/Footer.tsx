import React from 'react';
import { Container } from './Container';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              Felix <span className="text-secondary">Cell</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Qualidade, confiança e agilidade no conserto do seu celular. Especialistas em Apple, Samsung e Multimarcas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-secondary transition-colors">Serviços</a></li>
              <li><a href="#how-it-works" className="hover:text-secondary transition-colors">Como Funciona</a></li>
              <li><a href="#testimonials" className="hover:text-secondary transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-secondary transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-secondary shrink-0" />
                <span>(11) 97369-3204</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-secondary shrink-0" />
                <span>contato@felixcell.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-secondary shrink-0" />
                <span>Rua Monte Casseros 282 - Banca Laranja <br />Centro, Santo André - SP </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Formas de Pagamento</h4>
            <div className="flex flex-col gap-4">
               <p className="text-gray-400 text-sm">Aceitamos cartões de crédito e débito:</p>
               <div className="flex items-center gap-3 flex-wrap">
                  <FaCcVisa size={32} className="text-white hover:text-blue-500 transition-colors" />
                  <FaCcMastercard size={32} className="text-white hover:text-red-500 transition-colors" />
                  <div className="flex items-center gap-1 bg-white px-2 py-1 rounded text-primary font-bold text-sm h-8" title="Cielo">
                    <span className="text-[#00aeef]">cielo</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Felix Cell Assistência Técnica. Todos os direitos reservados.</p>
          <p> <a href="https://wa.me/5511940512636" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Feito por: Dev Laboratório</a> </p>
        </div>
      </Container>
    </footer>
  );
};
