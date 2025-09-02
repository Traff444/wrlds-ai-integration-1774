import { useEffect, useRef } from 'react';
import { Check, ArrowRight, Zap, Users, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const packages = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      name: "Старт",
      price: "от 150 000₽",
      period: "за месяц",
      description: "Аудит + быстрые улучшения",
      features: [
        "Гемба-аудит процессов",
        "5S и визуальный менеджмент", 
        "3-5 быстрых улучшений",
        "Обучение команды основам",
        "Месячное сопровождение"
      ],
      highlight: false,
      color: "blue"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      name: "Рост",
      price: "от 300 000₽",
      period: "за месяц",
      description: "Автоматизация + системные улучшения",
      features: [
        "Всё из пакета «Старт»",
        "CRM + интеграции в n8n",
        "Лендинг + AI-бот",
        "Дашборды и аналитика",
        "3 месяца сопровождения"
      ],
      highlight: true,
      color: "green"
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
      name: "Масштаб",
      price: "от 500 000₽",
      period: "за проект",
      description: "Полная трансформация бизнеса",
      features: [
        "Всё из пакета «Рост»",
        "Исследование рынка и CJM",
        "Множественные интеграции",
        "Omni-channel воронка",
        "6 месяцев сопровождения + обучение"
      ],
      highlight: false,
      color: "purple"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.pricing-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in');
              (card as HTMLElement).style.opacity = '1';
            }, index * 200);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
            Форматы и стоимость
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Выберите подходящий пакет
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            От точечных улучшений до полной трансформации — работаем в удобном для вас формате
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={cn(
                "pricing-card relative bg-white rounded-2xl shadow-lg border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl opacity-0",
                pkg.highlight ? "border-green-200 shadow-green-100" : "border-gray-200",
                pkg.highlight ? "md:scale-105" : ""
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className={cn(
                    "p-2 rounded-lg",
                    pkg.color === "blue" && "bg-blue-100",
                    pkg.color === "green" && "bg-green-100", 
                    pkg.color === "purple" && "bg-purple-100"
                  )}>
                    {pkg.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                    <p className="text-sm text-gray-600">{pkg.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                  </div>
                  <span className="text-gray-600 text-sm">{pkg.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={cn(
                        "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                        pkg.color === "blue" && "bg-blue-100",
                        pkg.color === "green" && "bg-green-100",
                        pkg.color === "purple" && "bg-purple-100"
                      )}>
                        <Check className={cn(
                          "w-3 h-3",
                          pkg.color === "blue" && "text-blue-600",
                          pkg.color === "green" && "text-green-600",
                          pkg.color === "purple" && "text-purple-600"
                        )} />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className={cn(
                    "w-full group transition-all duration-300",
                    pkg.highlight 
                      ? "bg-green-600 hover:bg-green-700 text-white" 
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  )}
                >
                  Обсудить проект
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Нужен индивидуальный подход? 
          </p>
          <Button 
            variant="outline" 
            onClick={scrollToContact}
            className="border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Обсудить особые условия
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;