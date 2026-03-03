import { useEffect, useRef, useState } from "react";

const CursorGlow = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detect if device has a fine pointer (mouse/trackpad)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    const handleChange = () => {
      setIsDesktop(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);


    
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleDown = () => {
      cursor.classList.add("scale-75");
    };

    const handleUp = () => {
      cursor.classList.remove("scale-75");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [isDesktop]);

  // If not desktop → render nothing
  if (!isDesktop) return null;

  return (
    <div
      ref={cursorRef}
      className="
        pointer-events-none
        fixed
        top-0 left-0
        -translate-x-1/2 -translate-y-1/2
        w-3.5 h-3.5
        rounded-full
        border border-primary-light/60
        bg-primary-light/20
        shadow-[0_0_12px_theme(colors.primary.light)]
        backdrop-blur-sm
        transition-transform duration-150
        z-[9999]
      "
    />
  );
};

export default CursorGlow;