import { letterSpacing } from "html2canvas/dist/types/css/property-descriptors/letter-spacing";

export interface EditorState {
  name: string;
  text?: string;
  textAllCaps?: string;
  writerCredit: boolean;
  writer?: string;
  color?: string;
  background: string;
  alt: string;
  font: string;
  fontSize: number;
  textShadow?: string;
  effect: string | null;
  subtitleOffset: number;
  styling?: string;
  width?: string;
  outline?: string;
  outlineColour?: string;
  letterSpacing?: number;
  top?: string;
  fontWeight?: number | string;
}
