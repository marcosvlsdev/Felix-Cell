import React, { useState } from 'react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { Menu, X, Smartphone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md animate-slide-down"
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg text-white">
              <Smartphone size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              Felix <span className="text-secondary">Cell</span>
            </span>
          </div>

   
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-secondary text-gray-600 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="https://wa.me/5511973693204" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm">
                Orçamento via WhatsApp
              </Button>
            </a>
          </div>

      
          <button 
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

  
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg lg:hidden p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-700 font-medium py-2 border-b border-gray-50 last:border-0 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="w-full">
            <Button variant="primary" fullWidth>
              Orçamento via WhatsApp
            </Button>
          </a>
        </div>
      )}
    </header>
  );
};
