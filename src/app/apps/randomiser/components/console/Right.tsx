import styles from "@/app/styles/randomiser.module.css";

interface rightProps {
  setTelepath: (b: boolean) => void;
}

const webLinks: string[] = [
  "john+levene+feet+pics",
  "colin+baker+cake+sitting",
  "danvanista",
  "wilfred+mott+browser+history",
  "chris+chibnall+christmas+album",
  "terrance+dicks%27+most+popular+anecdotes",
  "in+castrovalva+where+does+the+master+get+that+pneumatic+lift+from",
];

const Right: React.FC<rightProps> = ({ setTelepath }) => {
  const telepathTime = () => {
    setTelepath(true);
    const randomWebLink = webLinks[Math.floor(Math.random() * webLinks.length)];
    setTimeout(() => {
      window.open(`https://www.ecosia.org/search?q=${randomWebLink}`)?.focus();
      setTelepath(false);
    }, 4000);
  };

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
