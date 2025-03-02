import React, { useEffect, useState } from 'react';
import { ArrowRight, Smartphone, Zap, Shield, Star, Check, ChevronRight } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 animate-slide-right">
          <Smartphone className="h-6 w-6 text-indigo-600" />
          <span className="font-bold text-xl">AppLaunch</span>
        </div>
        <nav className="hidden md:flex space-x-8 animate-fade-in">
          <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Recursos</a>
          <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Preços</a>
          <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors">Depoimentos</a>
        </nav>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 animate-slide-left">
          Baixar Agora
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="hero-background">
          <div className="hero-grid"></div>
          <div className="hero-glow"></div>
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
          <div className="hero-shape hero-shape-4"></div>
          
          {/* Floating Bubbles */}
          {[...Array(10)].map((_, i) => {
            const size = Math.floor(Math.random() * 60) + 20;
            const left = Math.floor(Math.random() * 100);
            const top = Math.floor(Math.random() * 100);
            const tx = (Math.random() - 0.5) * 200;
            const ty = (Math.random() - 0.5) * 200;
            const duration = Math.floor(Math.random() * 10) + 10;
            
            return (
              <div 
                key={i}
                className="hero-bubble"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                  '--tx': `${tx}px`,
                  '--ty': `${ty}px`,
                  '--duration': `${duration}s`,
                  animationDelay: `${i * 0.5}s`
                } as React.CSSProperties}
              ></div>
            );
          })}
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className={`space-y-6 text-center md:text-left ${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-custom-40 font-bold leading-tight tracking-wide text-indigo-600">
              Transforme sua experiência digital com nosso aplicativo
            </h1>                     
              <p className="text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
                Uma solução moderna e intuitiva para suas necessidades diárias. Simples, rápido e eficiente.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <button className="bg-gradient-primary text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group animate-pulse-slow">
                  Começar agora 
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors hover:border-indigo-300">
                  Saiba mais
                </button>
              </div>
            </div>
            <div className={`flex justify-center relative ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
              {/* Rotating Glow Effect */}
              <div className="absolute w-full h-full max-w-md max-h-md rounded-full bg-gradient-primary opacity-10 blur-3xl animate-rotate"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="App showcase" 
                className="w-full max-w-md rounded-2xl shadow-2xl relative z-10 animate-float"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-600 rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-indigo-400 rounded-full opacity-20 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gradient-light py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 animate-slide-up">Recursos Principais</h2>
            <p className="text-xl text-gray-600 animate-slide-up delay-100">
              Nosso aplicativo foi projetado para oferecer a melhor experiência possível com recursos inovadores.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover-lift animate-slide-up delay-200">
              <div className="bg-indigo-100 p-3 rounded-full w-fit mb-6">
                <Zap className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Desempenho Rápido</h3>
              <p className="text-gray-600">
                Otimizado para oferecer a melhor velocidade e eficiência em todas as operações.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover-lift animate-slide-up delay-300">
              <div className="bg-indigo-100 p-3 rounded-full w-fit mb-6">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Segurança Avançada</h3>
              <p className="text-gray-600">
                Proteção de dados de última geração para garantir sua privacidade e segurança.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover-lift animate-slide-up delay-400">
              <div className="bg-indigo-100 p-3 rounded-full w-fit mb-6">
                <Smartphone className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Design Intuitivo</h3>
              <p className="text-gray-600">
                Interface amigável e moderna que torna a navegação simples e agradável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 animate-slide-up">Planos e Preços</h2>
            <p className="text-xl text-gray-600 animate-slide-up delay-100">
              Escolha o plano que melhor atende às suas necessidades e comece a usar hoje mesmo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-indigo-200 transition-colors hover-lift animate-slide-up delay-200">
              <h3 className="text-xl font-bold mb-2">Básico</h3>
              <p className="text-gray-600 mb-6">Ideal para uso pessoal</p>
              <p className="text-4xl font-bold mb-6">R$29<span className="text-lg text-gray-600 font-normal">/mês</span></p>
              
              <ul className="space-y-3 mb-8">
                {['Acesso a recursos básicos', '1 dispositivo', 'Suporte por email'].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-green-100 p-1 rounded-full mr-3 flex-shrink-0">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full border border-indigo-600 text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition-all duration-300 group flex items-center justify-center">
                Escolher Plano
                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
            
            <div className="bg-gradient-primary p-8 rounded-xl shadow-xl transform md:-translate-y-4 hover-lift animate-slide-up delay-300 animate-pulse-slow">
              <div className="bg-indigo-500 text-white text-sm font-semibold py-1 px-3 rounded-full inline-block mb-4">
                MAIS POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Pro</h3>
              <p className="text-indigo-200 mb-6">Perfeito para profissionais</p>
              <p className="text-4xl font-bold mb-6 text-white">R$59<span className="text-lg text-indigo-200 font-normal">/mês</span></p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Todos os recursos básicos',
                  'Até 5 dispositivos',
                  'Suporte prioritário',
                  'Recursos avançados'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-white">
                    <div className="bg-indigo-400 p-1 rounded-full mr-3 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-white text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition-all duration-300 font-medium group flex items-center justify-center">
                Escolher Plano
                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-indigo-200 transition-colors hover-lift animate-slide-up delay-400">
              <h3 className="text-xl font-bold mb-2">Empresarial</h3>
              <p className="text-gray-600 mb-6">Para equipes e empresas</p>
              <p className="text-4xl font-bold mb-6">R$99<span className="text-lg text-gray-600 font-normal">/mês</span></p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Todos os recursos Pro',
                  'Dispositivos ilimitados',
                  'Suporte 24/7',
                  'API personalizada'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-green-100 p-1 rounded-full mr-3 flex-shrink-0">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full border border-indigo-600 text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition-all duration-300 group flex items-center justify-center">
                Escolher Plano
                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-gradient-light py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 animate-slide-up">O que nossos clientes dizem</h2>
            <p className="text-xl text-gray-600 animate-slide-up delay-100">
              Milhares de usuários satisfeitos em todo o mundo
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                text: "Este aplicativo transformou completamente minha rotina diária. A interface é intuitiva e os recursos são exatamente o que eu precisava.",
                name: "Ana Silva",
                role: "Designer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                delay: "delay-200"
              },
              {
                text: "Estou impressionado com a velocidade e eficiência deste aplicativo. A equipe de suporte é excepcional e sempre pronta para ajudar.",
                name: "Carlos Oliveira",
                role: "Empresário",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                delay: "delay-300"
              },
              {
                text: "Como profissional de TI, sou exigente com os aplicativos que uso. Este superou todas as minhas expectativas em termos de segurança e funcionalidade.",
                name: "Mariana Costa",
                role: "Analista de TI",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                delay: "delay-400"
              }
            ].map((testimonial, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-sm hover-lift animate-slide-up ${testimonial.delay}`}>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} avatar`} 
                    className="h-12 w-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-primary rounded-2xl p-10 md:p-16 text-center animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para transformar sua experiência digital?
            </h2>
            <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de usuários satisfeitos e comece a usar nosso aplicativo hoje mesmo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 font-semibold">
                Baixar Agora
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Smartphone className="h-6 w-6 text-indigo-400" />
                <span className="font-bold text-xl">AppLaunch</span>
              </div>
              <p className="text-gray-400">
                Transformando a experiência digital com soluções modernas e intuitivas.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Empresa</h4>
              <ul className="space-y-2">
                {['Sobre nós', 'Carreiras', 'Blog', 'Imprensa'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                      <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Recursos</h4>
              <ul className="space-y-2">
                {['Guia de início', 'Tutoriais', 'FAQ', 'Suporte'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                      <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                {['Termos de Serviço', 'Política de Privacidade', 'Cookies', 'Licenças'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                      <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2025 AppLaunch. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              {[
                "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z",
                "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              ].map((path, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors hover-scale">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;