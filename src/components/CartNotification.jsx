import { useState, useEffect } from "react";
import { FiCheck, FiX } from "react-icons/fi";

export default function CartNotification({ show, message, onClose }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsMounted(true);
      setTimeout(() => setIsVisible(true), 10); // delay to trigger CSS transition

      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setIsMounted(false);
          onClose();
        }, 300); // wait for fade out
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed top-24 right-4 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
      }`}
    >
      <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-80">
        <FiCheck className="text-xl" />
        <span className="flex-1 font-medium">{message}</span>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => {
              setIsMounted(false);
              onClose();
            }, 300);
          }}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <FiX className="text-lg" />
        </button>
      </div>
    </div>
  );
}
