"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", scroll);

    return () =>
      window.removeEventListener(
        "scroll",
        scroll
      );
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
      fixed
      bottom-6
      right-6
      z-50
      bg-yellow-500
      p-3
      rounded-full
      text-black
      "
    >
      <ChevronUp />
    </button>
  );
}