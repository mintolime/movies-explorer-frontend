import { useState, useEffect } from "react";
import { SCREEN_SM, SCREEN_MD, SCREEN_XL } from "../utils/constants";

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
     // 319 & 767
    isScreenSm: width >= SCREEN_SM && width < SCREEN_MD,
     // 767 & 1279
    isScreenMd: width >= SCREEN_MD && width < SCREEN_XL,
     // 1279
    isScreenXl: width >= SCREEN_XL,
  };
};
