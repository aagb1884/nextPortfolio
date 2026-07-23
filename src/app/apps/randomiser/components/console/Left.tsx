import styles from "@/app/styles/randomiser.module.css";

interface leftProps {
  setHelmic: (b: boolean) => void;
}

const Left: React.FC<leftProps> = ({ setHelmic }) => {
  const timeout = () => {
    setHelmic(true);
    setTimeout(() => {
      setHelmic(false);
    }, 4000);
  };
  return (
    <div className={styles.consoleLeft}>
      <button
        className={styles.nodBtn}
        onClick={() => {
          timeout();
        }}
      >
        <div className={styles.nodule} />

        <div className={styles.nodule} />
      </button>
      <div className={styles.rectangle} />
    </div>
  );
};

export default Left;
