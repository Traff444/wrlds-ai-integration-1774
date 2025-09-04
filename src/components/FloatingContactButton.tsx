
import { MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ChatModal from "@/components/ChatModal";

const FloatingContactButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Show the button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const openChat = () => {
    setIsChatOpen(true);
  };
  
  if (!isVisible) return null;
  
  return (
    <>
      <Button
        onClick={openChat}
        className="fixed bottom-6 right-6 z-50 bg-red-500 hover:bg-red-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all animate-pulse hover:animate-none"
        size="icon"
        aria-label="Chat with Manager"
        style={{ width: '60px', height: '60px' }}
      >
        <MessageSquare className="h-7 w-7" />
      </Button>
      
      <ChatModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </>
  );
};

export default FloatingContactButton;
