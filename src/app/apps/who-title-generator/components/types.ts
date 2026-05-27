export interface EditorState {
  name: string;
  text: string;
  writerCredit: boolean;
  writer?: string;
  color: string;
  background: string;
  alt: string;
  font: string;
  fontSize: number;
  textShadow: string;
  effect: string | null;
  generating: boolean;
  subtitleOffset: number;
  styling?: string;
}
