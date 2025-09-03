
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              О f(<span className="text-red-600">A</span>m)team
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                Мы делаем работу видимой и приводим её в порядок. Малые шаги каждый день, прозрачные метрики и автоматизация только там, где это окупается. Остальное — лишний шум.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Наша Миссия</h2>
                  <p className="text-gray-600">
                    Помогать малому и среднему бизнесу расти за счёт ежедневных микро-улучшений. Мы фиксируем стандарты, учимся на данных и автоматизируем только устойчивые процессы — чтобы скорость, качество и маржинальность росли автоматически.
                  </p>
                  <p className="text-gray-600">
                    Мы верим, что большие достижения завтра начинаются с маленьких шагов сегодня.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Наши Ценности</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Гемба, не слайды:</strong> Работаем «на месте», видим реальный поток, а не предположения.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Простота и уважение к людям:</strong> Стандарты, которые удобно выполнять каждый день.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Учимся на данных:</strong> PDCA-ритм, метрики и честная обратная связь.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Этичная автоматизация:</strong> ИИ только там, где есть стабильность и прозрачная выгода.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Наша история</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    Шесть месяцев назад мы сели командой и решили: хватит хранить опыт «по папкам». Давайте превратим его в простую практику, которая помогает бизнесу увидеть свои процессы под другим углом — не в отчётах, а там, где идёт работа.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Мы слишком хорошо знаем боль: в компании может быть много добрых намерений, но процессы разваливаются — сроки плывут, люди переделывают, деньги «теряются по дороге». Причина одна: никто не собирает всё в один пазл, где видно, что реально приносит деньги, а что — шум.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Мы долго искали своё «зачем» и нишу. Щелчок случился, когда мы вслух сказали слово «кайдзен». Мы и раньше интуитивно разбивали работу на маленькие шаги, клеили красные метки на складе, подписывали полки, спорили за порядок. Но тогда встречали сопротивление.
                  </p>
                  <p className="text-gray-600 mb-4">
                    — «Все так просто?» — спросил один коллега. — Да. Просто и сложно одновременно: простые шаги каждый день — и дисциплина держать их.
                  </p>
                  <p className="text-gray-600">
                    Так родилась f(Am)team. Наш принцип — гемба, не слайды: идём на место, делаем работу видимой, фиксируем понятные стандарты, запускаем короткие PDCA-циклы. И только устойчивое — автоматизируем. Если компания к изменениям не созрела, мы честно скажем: нам рано быть вместе. Мир движется — стоя на месте, легко остаться за бортом.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Team</h2>
                <p className="text-gray-600 mb-8">
                  Our diverse team combines expertise in textile engineering, electronics, software development, 
                  artificial intelligence, and industry-specific knowledge to deliver holistic solutions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Felix von Heland",
                      role: "CEO and Founder",
                      bio: "Leading WRLDS Technologies with a vision to transform the future of smart textiles.",
                      image: "/lovable-uploads/aa5291bd-2417-4c1e-9a02-0bcc71a92507.png"
                    },
                    {
                      name: "Niek Bijman",
                      role: "Software Lead",
                      bio: "Specializing in cloud infrastructure and APIs for seamless data integration.",
                      image: "/lovable-uploads/e502f601-c519-43a8-86f5-5fa89ae50d2f.png"
                    },
                    {
                      name: "Chengjie Li",
                      role: "Hardware Lead",
                      bio: "Expert in embedded systems engineering, leading our hardware development efforts.",
                      image: "/lovable-uploads/3de85ddd-15e1-4216-9697-f91abb9a47ce.png"
                    },
                    {
                      name: "Love",
                      role: "COO",
                      bio: "Overseeing daily operations and ensuring business objectives are met effectively.",
                      image: "/lovable-uploads/a9bb9110-964a-43b0-a5ab-7162140cd133.png"
                    }
                  ].map((member, i) => (
                    <Card key={i} className="bg-gray-50 border border-gray-100 overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                            <img 
                              src={member.image} 
                              alt={member.name} 
                              className="w-full h-full object-cover filter grayscale" 
                            />
                          </div>
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-gray-500 text-sm mb-2">{member.role}</p>
                          <p className="text-gray-600 text-sm">{member.bio}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/careers" className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Join Our Team
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
