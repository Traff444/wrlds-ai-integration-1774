
import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-black text-white relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Связаться с нами
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Свяжитесь с нами сегодня
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Есть вопросы по нашим решениям для автоматизации бизнеса? Обратитесь к нашей команде, и давайте обсудим, как мы можем помочь воплотить ваши идеи в жизнь.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Felix's Contact Info */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/lovable-uploads/1516059c-f1fe-4bac-b700-dfdd67a7f54f.png"
                alt="Felix von Heland"
                className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
              />
              <h3 className="text-xl font-bold text-gray-900">Felix von Heland</h3>
              <p className="text-gray-600 mb-4">Генеральный директор и основатель</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:felix@wrlds.com" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Mail className="w-5 h-5 mr-2" />
                  felix@wrlds.com
                </a>
                <a 
                  href="https://www.linkedin.com/in/felixvonheland/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Профиль LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Love's Contact Info */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/lovable-uploads/4956b2df-9c00-400a-a2ea-7e5f4a4aba13.png"
                alt="Love Anderberg"
                className="w-32 h-32 rounded-full mb-4 object-cover object-top filter grayscale"
              />
              <h3 className="text-xl font-bold text-gray-900">Love Anderberg</h3>
              <p className="text-gray-600 mb-4">Операционный директор</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:love@wrlds.com" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Mail className="w-5 h-5 mr-2" />
                  love@wrlds.com
                </a>
                <a 
                  href="https://www.linkedin.com/in/love-anderberg-67549a174/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Профиль LinkedIn
                </a>
                <a href="tel:+46760149508" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Phone className="w-5 h-5 mr-2" />
                  076-014 95 08
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
