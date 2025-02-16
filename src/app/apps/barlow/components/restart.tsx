interface restartProps {
    reset: () => void;
  }

  import styles from '@/app/styles/barlow.module.css';
  
  const RestartBtn: React.FC<restartProps> = ({reset}) => {
    return (
    <button 
    className={styles.barlowBtn}
    onClick={reset}
    >
        Restart
      </button>
    )
};

export default RestartBtn;