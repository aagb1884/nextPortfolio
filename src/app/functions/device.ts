import { userAgent } from "next/server";

export const isAndroid = () => Boolean(userAgent.name.match(/Android/i));
export const isIos = () => Boolean(userAgent.name.match(/iPhone|iPad|iPod/i));
