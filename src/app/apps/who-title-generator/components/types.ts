import { StaticImageData } from "next/image";

export interface EditorState {
  text: string;
  color: string;
  background: string | StaticImageData;
  font: string;
  fontSize: number;
  textShadow: string;
  effect: string | null;
  generating: boolean;
  subtitleOffset: number;
}
