
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from 'emailjs-com';

// Updated schema with honeypot field validation
const formSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать не менее 2 символов'),
  email: z.string().email('Пожалуйста, введите корректный email адрес'),
  message: z.string().min(10, 'Сообщение должно содержать не менее 10 символов'),
  honeypot: z.string().max(0, 'Бот обнаружен'), // Honeypot field must be empty
  timestamp: z.number() // To prevent automated quick submissions
});

type FormValues = z.infer<typeof formSchema>;

// EmailJS configuration - Updated with correct template ID
const EMAILJS_SERVICE_ID = "service_i3h66xg";
const EMAILJS_TEMPLATE_ID = "template_fgq53nh"; // Updated to the correct template ID
const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStartTime] = useState<number>(Date.now()); // Track when form was opened
  
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      honeypot: '',
      timestamp: formStartTime
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Bot checks
      // 1. Honeypot check - should be caught by zod, but double-check
      if (data.honeypot) {
        console.log('Bot detected via honeypot');
        toast({
          title: "Ошибка",
          description: "Произошла проблема с отправкой формы. Пожалуйста, попробуйте еще раз.",
          variant: "destructive"
        });
        return;
      }
      
      // 2. Time-based check - Submission should take at least 3 seconds (too fast is likely a bot)
      const timeDiff = Date.now() - data.timestamp;
      if (timeDiff < 3000) {
        console.log(`Bot detected: Form submitted too quickly (${timeDiff}ms)`);
        toast({
          title: "Ошибка",
          description: "Пожалуйста, уделите время проверке сообщения перед отправкой.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }
      
      console.log('Form submitted:', data);
      
      // Remove honeypot and timestamp fields before sending
      const { honeypot, timestamp, ...emailData } = data;
      
      // Using parameters exactly as expected by EmailJS templates
      const templateParams = {
        from_name: emailData.name,
        from_email: emailData.email,
        message: emailData.message,
        to_name: 'f(Am)team', // Adding recipient name parameter
        reply_to: emailData.email // Keeping reply_to for compatibility
      };
      
      console.log('Sending email with params:', templateParams);
      console.log('Using service:', EMAILJS_SERVICE_ID);
      console.log('Using template:', EMAILJS_TEMPLATE_ID);
      console.log('Using public key:', EMAILJS_PUBLIC_KEY);
      
      // Send email directly without initializing, as it's not needed with the send method that includes the key
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY // Re-adding the public key parameter
      );
      
      console.log('Email sent successfully:', response);
      
        toast({
          title: "Сообщение отправлено!",
          description: "Мы получили ваше сообщение и скоро с вами свяжемся.",
          variant: "default"
        });

      form.reset({
        name: '',
        email: '',
        message: '',
        honeypot: '',
        timestamp: Date.now()
      });
    } catch (error) {
      console.error('Error sending email:', error);
      
      // More detailed error logging
      if (error && typeof error === 'object' && 'text' in error) {
        console.error('Error details:', (error as any).text);
      }
      
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section id="contact" className="bg-gradient-to-b from-white to-black text-white relative py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-700 text-black">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="name" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-gray-700">Имя</FormLabel>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <FormControl>
                          <Input placeholder="Ваше имя" className="pl-10" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="email" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-gray-700">Электронная почта</FormLabel>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" className="pl-10" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="message" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-gray-700">Сообщение</FormLabel>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <FormControl>
                          <Textarea placeholder="Расскажите нам о вашем проекте или запросе..." className="min-h-[120px] pl-10 resize-none" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>} />
                
                {/* Honeypot field - hidden from real users but bots will fill it */}
                <FormField control={form.control} name="honeypot" render={({
                field
              }) => <FormItem className="hidden">
                      <FormLabel>Leave this empty</FormLabel>
                      <FormControl>
                        <Input {...field} tabIndex={-1} />
                      </FormControl>
                    </FormItem>} />
                
                {/* Hidden timestamp field */}
                <FormField control={form.control} name="timestamp" render={({
                field
              }) => <FormItem className="hidden">
                      <FormControl>
                        <Input type="hidden" {...field} />
                      </FormControl>
                    </FormItem>} />
                
                <button type="submit" disabled={isSubmitting} className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center disabled:opacity-70">
                  {isSubmitting ? "Отправка..." : <>
                      Отправить сообщение
                      <Send className="ml-2 h-4 w-4" />
                    </>}
                </button>
              </form>
            </Form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-700 text-black">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Напишите нам</h3>
              <p className="text-gray-600 mb-2">По общим вопросам:</p>
              <a href="mailto:info@wrlds.com" className="text-blue-500 hover:underline">hello@wrlds.com</a>
              <p className="text-gray-600 mt-2 mb-2">
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactForm;
