import styles from "@/app/styles/randomiser.module.css";

interface leftProps {
  helmic: boolean;
  setHelmic: (b: boolean) => void;
  helmicTally: number;
  setHelmicTally: React.Dispatch<React.SetStateAction<number>>;
  telepath: boolean;
  searchLink: boolean;
}

const Left: React.FC<leftProps> = ({
  helmic,
  setHelmic,
  helmicTally,
  setHelmicTally,
  telepath,
  searchLink,
}) => {
  const timeout = () => {
    setHelmic(true);
    setTimeout(() => {
      setHelmic(false);
    }, 4000);
    setHelmicTally((prev) => prev + 1);
  };
  return (
    <div className={styles.consoleLeft}>
      <button
        disabled={helmicTally >= 4 || helmic || telepath || searchLink}
        className={styles.nodBtn}
        onClick={() => {
          timeout();
        }}
      >
        <div className={styles.nodule} />

        <div className={styles.nodule} />
      </button>
      <div className={styles.rectangle}>
        <span className={styles.rectGrid} />
      </div>
    </div>
  );
};

export default Left;
