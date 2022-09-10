import { useEffect, useRef } from "react";

export const useOnWindowScroll = (callback: () => string) => {
  const listener = useRef(null);

  useEffect(() => {
    if (listener.current){
      window.removeEventListener("scroll", listener.current);
    }
    listener.current = window.addEventListener("scroll", callback);
    return () => {
      window.removeEventListener("scroll", listener.current);
    };
  }, [callback]);

}