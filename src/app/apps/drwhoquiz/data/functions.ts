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
