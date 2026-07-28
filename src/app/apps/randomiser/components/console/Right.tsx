import styles from "@/app/styles/randomiser.module.css";
import { useState, useEffect } from "react";

interface rightProps {
  setTelepath: (b: boolean) => void;
  setSearchLink: (b: boolean) => void;
  setSearchTerm: (b: string) => void;
  telepath: boolean;
  searchLink: boolean;
  helmic: boolean;
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
  "is it canon confirmed that time lords have junk?",
  "Chris Bidmead in a Sinclair C5",
];

const Right: React.FC<rightProps> = ({
  setTelepath,
  setSearchLink,
  setSearchTerm,
  telepath,
  searchLink,
  helmic,
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
      <button
        className={styles.telepath}
        disabled={telepath || searchLink || helmic}
        onClick={() => {
          telepathTime();
        }}
      />
      <div className={styles.gridSurround}>
        <div className={`${styles.grid} ${isSpinning ? styles.spin : ""}`} />
      </div>
      <div className={styles.gridSurround}>
        <div className={`${styles.grid} ${isSpinning ? styles.inverse : ""}`} />
      </div>
    </div>
  );
};

export default Right;
