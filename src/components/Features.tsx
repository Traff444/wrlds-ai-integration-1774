import { useEffect, useRef, useState } from 'react';
import { TrendingUp, ArrowRight, MessageSquare, Workflow, MessageCircle, BarChart3 } from "lucide-react";
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { useScrollHijack } from '@/hooks/useScrollHijack';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const hijackSectionRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [progressValue, setProgressValue] = useState(0);
  const [currentSprint, setCurrentSprint] = useState(1);
  const totalSprints = 3;
  const isMobile = useIsMobile();

  const features = [
    {
      icon: <TrendingUp className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Аналитика и рынок",
      description: "Исследуем спрос, конкурентов и путь клиента; считаем юнит-экономику и приоритеты. На этом строим гипотезы роста и бэклог «быстрых побед».",
      image: "/lovable-uploads/bc684e3c-45bd-4393-8b93-a4d7030a8e1a.png"
    },
    {
      icon: <Workflow className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Процессы под ключ",
      description: "Гемба-аудит, 5S, стандарты и визуальный менеджмент. Запускаем короткие PDCA-циклы, чтобы команда сама убирала потери и держала качество.",
      image: "/lovable-uploads/dcb286fc-8430-4377-a96b-154ab015564d.png"
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Сайты + чат-боты",
      description: "Делаем лендинги под ниши и AI-ботов (TG/WA/Mini App). Подключаем омниканальную воронку: трафик → лид → CRM → аналитика.",
      image: "/lovable-uploads/53077ce3-6114-4784-b87d-966b77d45a7d.png"
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Kaizen-дашборды",
      description: "Настраиваем CRM, интеграции и сценарии в n8n: разбор заявок, маршрутизация исполнителям, напоминания, отчёты. Автоматизируем только стабильное.",
      image: "/lovable-uploads/eb49877e-22a1-4040-983f-846f94b28e5a.png"
    }
  ];

  const { isHijacked, currentIndex } = useScrollHijack(hijackSectionRef, features.length);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          (entry.target as HTMLElement).style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll('.feature-item');
      elements.forEach(el => {
        if (!el.classList.contains('animate-slide-in')) {
          (el as HTMLElement).style.opacity = '0';
          observer.observe(el);
        }
      });
    }
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    const animateProgress = () => {
      setProgressValue(0);
      interval = setInterval(() => {
        setProgressValue(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setCurrentSprint(prev => prev < totalSprints ? prev + 1 : 1);
              animateProgress();
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    };
    animateProgress();
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return <>
      <section id="features" className="relative bg-white overflow-hidden py-10 md:py-[50px] w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8" ref={featuresRef}> 
          <div className="text-center mb-10 max-w-3xl mx-auto feature-item">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Комплексный подход
            </div>
            <p className="text-gray-600 mt-4">
              Сначала данные, потом действия: измеряем, автоматизируем, улучшаем — повторяем цикл без остановки
            </p>
          </div>
          
          {/* Scroll-hijacked features section */}
          <div 
            ref={hijackSectionRef}
            className={cn(
              "relative transition-all duration-500",
              isHijacked ? "fixed inset-0 z-50 bg-black" : "grid grid-cols-1 md:grid-cols-2 gap-5"
            )}
            style={{ height: isHijacked ? '100vh' : 'auto' }}
          >
            {isHijacked && (
              <div className="absolute top-4 right-4 z-10 text-white text-sm opacity-70">
                {currentIndex + 1} / {features.length}
              </div>
            )}
            
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={cn(
                  "feature-item rounded-xl overflow-hidden transform transition-all duration-500 relative shadow-lg",
                  isHijacked 
                    ? cn(
                        "absolute inset-0 w-full h-full",
                        index === currentIndex 
                          ? "opacity-100 translate-x-0" 
                          : index < currentIndex 
                            ? "opacity-0 -translate-x-full" 
                            : "opacity-0 translate-x-full"
                      )
                    : "hover:-translate-y-1 h-[280px]"
                )}
                style={{
                  transitionDelay: isHijacked ? '0ms' : `${index * 100}ms`
                }}
                onMouseEnter={() => !isHijacked && setHoveredFeature(index)} 
                onMouseLeave={() => !isHijacked && setHoveredFeature(null)}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className={cn(
                      "w-full h-full object-cover transition-all duration-300",
                      isHijacked ? "grayscale-0" : "grayscale"
                    )} 
                  />
                  <div className={cn(
                    "absolute inset-0 transition-opacity duration-300",
                    isHijacked 
                      ? "bg-black/40" 
                      : hoveredFeature === index 
                        ? "bg-black/50" 
                        : "bg-black/70"
                  )}></div>
                </div>
                
                <div className={cn(
                  "relative z-10 flex flex-col justify-center",
                  isHijacked 
                    ? "p-16 h-full text-center items-center" 
                    : "p-6 h-full justify-between"
                )}>
                  <div className={isHijacked ? "space-y-8" : ""}>
                    <div className={cn(
                      "inline-block p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg transition-all duration-300 transform",
                      isHijacked 
                        ? "mb-6 scale-150" 
                        : hoveredFeature === index 
                          ? "mb-4 hover:scale-110" 
                          : "mb-4"
                    )}>
                      <div className={`transform transition-transform duration-300 ${!isHijacked && hoveredFeature === index ? 'rotate-12' : ''}`}>
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className={cn(
                      "font-semibold text-white",
                      isHijacked ? "text-4xl mb-6" : "text-xl mb-2"
                    )}>
                      {feature.title}
                    </h3>
                    <p className={cn(
                      "text-white/90",
                      isHijacked ? "text-lg max-w-2xl" : "text-sm"
                    )}>
                      {feature.description}
                    </p>
                  </div>
                  {!isHijacked && (
                    <div className={`h-0.5 bg-white/70 mt-3 transition-all duration-500 ${hoveredFeature === index ? 'w-full' : 'w-0'}`}></div>
                  )}
                </div>
              </div>
            ))}
            
            {isHijacked && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
                <div className="flex space-x-2 mb-4">
                  {features.map((_, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        index === currentIndex ? "bg-white w-8" : "bg-white/50"
                      )}
                    />
                  ))}
                </div>
                <p className="text-sm opacity-70">
                  {isMobile ? "Swipe" : "Scroll"} to continue • Press ESC to exit
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button onClick={scrollToContact} className="inline-flex items-center px-4 sm:px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto">
            Нужна автоматизация &quot;под ключ&quot;?
            <MessageSquare className="ml-2 w-4 h-4 group-hover:animate-pulse" />
          </Button>
          
          <Button onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center px-4 sm:px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all group w-full sm:w-auto">
            Узнать больше о наших технологиях
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </>;
};
export default Features;
