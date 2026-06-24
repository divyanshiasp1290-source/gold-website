import { MessageCircle } from "lucide-react";

export function WhatsAppChatIcon() {
  // NOTE: Replace the phone number with your real WhatsApp business number.
  const phoneE164 = "+23272436895";
  const href = `https://wa.me/${phoneE164.replace(/\+/g, "")}?text=${encodeURIComponent(
    "Hello, I’d like to discuss precious metals trading and logistics."
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gold-gradient text-obsidian shadow-lg transition hover:opacity-90"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

