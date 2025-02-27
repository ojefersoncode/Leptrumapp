import { ArrowUp } from "lucide-react";

export default function ButtonTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 max-md:bottom-16 right-5">
      <button
        onClick={scrollToTop}
        className="relative p-3 bg-gray-950 text-white rounded-full shadow-lg hover:bg-red-400 transition"
      >
        <ArrowUp className="size-7" />
        <span className="absolute inset-0 rounded-full border-2 border-transparent animate-spin-border"></span>
      </button>
      <style jsx>{`
        @keyframes spin-border {
          0% {
            border-color: red transparent transparent transparent;
          }
          10% {
            border-color: red red transparent transparent;
          }
          20% {
            border-color: red red red transparent;
          }
          30% {
            border-color: red red red red;
          }
          40% {
            border-color: transparent red red red;
          }
          50% {
            border-color: transparent transparent red red;
          }
          60% {
            border-color: transparent transparent transparent red;
          }
          70% {
            border-color: red transparent transparent red;
          }
          80% {
            border-color: red red transparent red;
          }
          90% {
            border-color: red red red red;
          }
          100% {
            border-color: red transparent transparent transparent;
          }
        }
        .animate-spin-border {
          animation: spin-border 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
