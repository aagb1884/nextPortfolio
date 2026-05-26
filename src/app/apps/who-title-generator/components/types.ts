import { StaticImageData } from "next/image";

export interface EditorState {
  text: string;
  color: string;
  background: string | StaticImageData;
  font: string;
  fontSize: number;
  outline: number;
  outlineColor: string;
  effect: string | null;
  generating: boolean;
  subtitleOffset: number;
}
