import { useEffect, useState } from "react";

export const useScrollDetection = (threshold: number = 10): boolean => {
  const [didScroll, setDidScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setDidScroll(window.scrollY > threshold);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return didScroll;
};
