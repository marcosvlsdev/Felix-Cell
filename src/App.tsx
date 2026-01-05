import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Benefits } from './components/sections/Benefits';
import { Services } from './components/sections/Services';
import { HowItWorks } from './components/sections/HowItWorks';
import { Testimonials } from './components/sections/Testimonials';
import { CTA } from './components/sections/CTA';
import { FAQ } from './components/sections/FAQ';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <Services />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      
   
      <a 
        href="https://wa.me/5500000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#128C7E] transition-colors animate-in slide-in-from-bottom-10"
        aria-label="Falar no WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
      </a>
    </div>
  );
}

export default App;
