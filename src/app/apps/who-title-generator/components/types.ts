export interface EditorState {
  name: string;
  text?: string;
  textAllCaps?: React.CSSProperties["textTransform"] | undefined;
  writerCredit: boolean;
  writer?: string;
  color?: string;
  textBackground?: string;
  background: string;
  alt: string;
  font: string;
  fontSize: number;
  textShadow?: string;
  styling?: string;
  width?: string;
  outline?: string;
  outlineColour?: string;
  letterSpacing?: number;
  top?: string;
  fontWeight?: number | string;
  brightness?: string;
}

export type StateProps = {
  state: EditorState;
  setState: (state: EditorState) => void;
};
