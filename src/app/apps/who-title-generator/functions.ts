import { RefObject } from "react";
import html2canvas from "html2canvas";
import { html2canvasOptions } from "./components/types";

export const prepareURL = async (
  cardRef: RefObject<HTMLElement>,
  fileName: string | undefined,
  options: html2canvasOptions
) => {
  const cardElement = cardRef.current;

  if (!cardElement) return;

  try {
    // lazy load this package
    const html2canvas = await import(/* webpackPrefetch: true */ "html2canvas");

    const result = await html2canvas.default(cardElement, options);

    const asURL = result.toDataURL("image/png");
    // as far as I know this is a quick and dirty solution
    const anchor = document.createElement("a");
    anchor.href = asURL;
    anchor.download = `${fileName}.png`;
    anchor.click();
    anchor.remove();
    // maybe this part should set state with `setURLData(asURL)`
    // and when that's set to something you show the download button
    // which has `href=URLData`, so that people can click on it
  } catch (reason) {
    console.log(reason);
  }
};

export const openImageInNewTab = async (
  element: HTMLElement
): Promise<void> => {
  if (typeof window !== undefined) {
    const win = window.open("", "_blank");
    try {
      const canvas = await html2canvas(element, { x: 0 });

      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (!blob) reject(new Error("Failed to capture screenshot"));
          else resolve(blob);
        }, "image/png");
      });

      const url = URL.createObjectURL(blob);
      if (win !== null) {
        //   win.scrollTo(0, 0);
        win.location.href = url;
      }
    } catch (err) {
      console.error("Unable to create image.", err);
      alert(`Image creation failed.`);
    }
  }
};
