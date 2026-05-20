import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "0512345678";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white" />
    </a>
  );
};
