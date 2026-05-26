import { StaticImageData } from "next/image";

export interface EditorState {
  text: string;
  showCredits: boolean;
  showWatermark: boolean;
  color: string;
  background: string | StaticImageData;
  fontSize: number;
  outline: number;
  outlineColor: string;
  effect: string | null;
  generating: boolean;
  subtitleOffset: number;
}
