interface restartProps {
    reset: () => void;
    isActive: boolean
  }

  import styles from '@/app/styles/barlow.module.css';
  
  const RestartBtn: React.FC<restartProps> = ({reset, isActive}) => {
    return (
    <button 
    className={styles.barlowBtn}
      onClick={reset}
      disabled={!isActive}>
        Restart
      </button>
    )
};

export default RestartBtn;