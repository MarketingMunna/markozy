import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

/** Floating WhatsApp button for phones and tablets. */
export default function StickyWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Markozy on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_10px_30px_-8px_rgba(16,185,129,0.7)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 lg:hidden"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
