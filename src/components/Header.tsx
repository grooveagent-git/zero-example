"use client";

import { useEffect, useState } from "react";

export const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHeaderVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`w-full sticky top-0 h-12 z-50 transform transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-end justify-between h-full px-4 bg-white">
        <div className="flex my-4 items-end gap-4">
          <div className="w-5 h-5 bg-blue-400 rounded-full"></div>
          <p className="text-sm">ゼロリノベ</p>
        </div>
      </div>
    </header>
  );
};
