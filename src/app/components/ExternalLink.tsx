import Link from "next/link";
import ExternalLinkImage from "@/app/ui/ExternalLink";
import { CSSProperties } from "react";

type LinkProps = {
  href: string;
  styles?: CSSProperties;
  text: string;
};

const ExternalLink = ({ href, styles, text }: LinkProps) => {
  return (
    <span>
      <Link
        href={href}
        style={{ display: "inline", ...styles }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text ?? ""}
      </Link>
      &nbsp;
      <ExternalLinkImage />
    </span>
  );
};

export default ExternalLink;
