// screen width hook

import { useEffect, useState } from "react";

type WindowDimentions = {
  width: number | undefined;
};

export const useWindowDimensions = (): WindowDimentions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
    width: undefined,
  });
  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []); 

  return windowDimensions;
};

// functions

export const handleAudio = (set: (b: boolean) => void) => {
  setTimeout(() => {
    set(false);
  }, 11000);
  set(true);
};

// export const skip = (
//   handle: () => void,
//   set: (s: string) => void,
//   add: (q: Question) => void,
//   q: Question
// ): void => {
//   handle();
//   set("");
//   add(q);
// };
