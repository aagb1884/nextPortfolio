import styles from "@/app/styles/randomiser.module.css";
import { useState, useEffect } from "react";

interface rightProps {
  setTelepath: (b: boolean) => void;
  setSearchLink: (b: boolean) => void;
  setSearchTerm: (b: string) => void;
}

const webLinks: string[] = [
  "John Levene feet pics",
  "Colin Baker cake sitting",
  "Danvanista",
  "Wilfred Mott browser history",
  "Chris Chibnall's Christmas album",
  "Terrance Dicks on a jet ski",
  "Where does the Master get that pneumatic lift from in Castrovalva",
  "is Gary Downie in Hell?",
  "Has Katy Manning ever been glamping?",
  "baby ood deviant art",
  "am I related to Patrick Troughton?",
  "cybermen in little white shorts",
];

const Right: React.FC<rightProps> = ({
  setTelepath,
  setSearchLink,
  setSearchTerm,
}) => {
  function telepathTime() {
    setTelepath(true);
    const randomWebLink = webLinks[Math.floor(Math.random() * webLinks.length)];
    setTelepath(true);
    setTimeout(() => {
      setTelepath(false);
      setSearchLink(true);
    }, 2000);
    setSearchLink(false);
    setSearchTerm(randomWebLink);
  }
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  useEffect(() => {
    const timeout = setTimeout(() => setIsSpinning(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.consoleRight}>
      <div
        className={styles.telepath}
        onClick={() => {
          telepathTime();
        }}
      />
      <div className={styles.gridSurround}>
        <div className={`${styles.grid} ${isSpinning ? styles.spin : ""}`} />
      </div>
    </div>
  );
};

export default Right;
