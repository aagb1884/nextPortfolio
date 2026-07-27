export const isAndroid = () =>
  typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent);

export const isIos = () =>
  typeof navigator !== "undefined" &&
  /iPhone|iPad|iPod/i.test(navigator.userAgent) &&
  // iPadOS 13+ reports as Mac, so also check for touch support
  !(window as any).MSStream;

export const isIpadOS = () =>
  typeof navigator !== "undefined" &&
  navigator.userAgent.includes("Mac") &&
  navigator.maxTouchPoints > 1;

export const platform = navigator.userAgent;
