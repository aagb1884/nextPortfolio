export interface EditorState {
  name: string;
  text?: string;
  textAllCaps?: React.CSSProperties["textTransform"] | undefined;
  writerCredit: boolean;
  writer?: string;
  writerTop?: string;
  writerFont?: number;
  writerCaps?: React.CSSProperties["textTransform"] | undefined;
  writtenBy?: string;
  creditFlex?: React.CSSProperties["flexDirection"] | undefined;
  color?: string;
  // textBackground?: string;
  background: string;
  alt: string;
  font: string;
  fontSize: number;
  textShadow?: string;
  width?: string;
  outline?: string;
  outlineColour?: string;
  letterSpacing?: number;
  top?: string;
  left?: string;
  fontWeight?: number | string;
  // brightness?: string;
}

export type StateProps = {
  state: EditorState;
  setState: (state: EditorState) => void;
};

export type html2canvasOptions = {
  allowTaint: boolean;
  logging: boolean;
  useCORS: boolean;
  backgroundColor: string | null;
  removeContainer: boolean;
  windowWidth: number;
  windowHeight: number;
};
