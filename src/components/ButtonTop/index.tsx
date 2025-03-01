import { ArrowUp } from "lucide-react";

export default function ButtonTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 max-md:bottom-16 right-4 max-md:right-2">
      <button
        onClick={scrollToTop}
        className="relative p-3 bg-gray-900 text-white rounded-full shadow-lg "
      >
        <ArrowUp className="size-6" />
        <span className="absolute inset-0 rounded-full border-2 border-red-600 animate-spin-border"></span>
      </button>
      <style jsx>{`
        @keyframes spin-border {
          0% {
            transform: rotate(0deg);
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: rotate(360deg);
            opacity: 1;
          }
        }
        .animate-spin-border {
          animation: spin-border 3s linear infinite;
          border-width: 3px;
          box-shadow: 0 0 10px red;
        }
      `}</style>
    </div>
  );
}
