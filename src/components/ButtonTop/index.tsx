import { ArrowUp } from "lucide-react";

export default function ButtonTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 max-md:bottom-16 right-5">
      <button
        onClick={scrollToTop}
        className="relative p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-400 transition"
      >
        <ArrowUp className="size-7" />
        <span className="absolute inset-0 rounded-full border-2 border-transparent animate-spin-border"></span>
      </button>
      <style jsx>{`
        @keyframes spin-border {
          0% {
            border-color: white transparent transparent transparent;
          }
          25% {
            border-color: transparent white transparent transparent;
          }
          50% {
            border-color: transparent transparent white transparent;
          }
          75% {
            border-color: transparent transparent transparent white;
          }
          100% {
            border-color: white transparent transparent transparent;
          }
        }
        .animate-spin-border {
          animation: spin-border 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
}
