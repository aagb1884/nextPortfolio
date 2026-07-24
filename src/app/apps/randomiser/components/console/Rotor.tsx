import styles from "@/app/styles/randomiser.module.css";

interface rotorProps {
  active: boolean | undefined;
}

const Rotor: React.FC<rotorProps> = ({ active }) => {
  return (
    <div className={`${styles.rotor} ${active ? styles.active : ""}`}>
      <div className={styles.innerCase}>
        <div className={styles.innerLid}>
          <div className={styles.semiRow}>
            <span className={styles.semi} />
            <span className={styles.semi} />
            <span className={styles.semi} />
          </div>
          <div className={styles.rtrTop} />
        </div>
        <div className={styles.rtrRow}>
          <span className={styles.glowRtr}>
            <div className={styles.rtrLight} />
          </span>
          <span className={styles.glowRtr}>
            <div className={styles.rtrLight} />
          </span>
          <span className={styles.glowRtr}>
            <div className={styles.rtrLight} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Rotor;
