import { EditorState } from "./types";
import Image from "next/image";

export function Preview(props: { state: EditorState }) {
  const { state } = props;

  return (
    <div>
      <Image
        src={state.background}
        alt="Doctor Who title card"
        width={500}
        height={500}
      ></Image>
    </div>
  );
}
