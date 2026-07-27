import styles from "@/app/styles/randomiser.module.css";

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
  "Terrance Dicks' most popular anecdotes",
  "Where does the Master get that pneumatic lift from in Castrovalva",
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

  return (
    <div className={styles.consoleRight}>
      <div
        className={styles.telepath}
        onClick={() => {
          telepathTime();
        }}
      />
      <div className={styles.grid} />
    </div>
  );
};

export default Right;
