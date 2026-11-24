import external from "../../../public/images/external-link.png";
import Image from "next/image";
import styles from "@/app/styles/page.module.css";

const ExternalLinkImage = () => {
  return (
    <Image
      id="externalLink icon"
      className={styles.externalLink}
      title="external link"
      alt="External Link"
      width={20}
      height={20}
      src={external}
    />
  );
};

export default ExternalLinkImage;
