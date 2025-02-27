import { ArrowUp } from "lucide-react";

export default function ButtonTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 max-md:bottom-16 right-5">
      <button
        onClick={scrollToTop}
        className="p-3 bg-red-500 text-white rounded-full border border-black shadow-lg hover:bg-red-400 transition"
      >
        <ArrowUp size={14} />
      </button>
    </div>
  );
}
