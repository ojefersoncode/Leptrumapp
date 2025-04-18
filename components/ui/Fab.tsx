export function Fab() {
  return (
    <a
      href="https://wa.me/5599999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-3 z-50 flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <img src="/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
    </a>
  );
}
