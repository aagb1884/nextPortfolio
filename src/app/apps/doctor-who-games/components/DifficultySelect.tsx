import styles from "../../../styles/drwho.module.css";

interface DifficultyProps {
  setTimer: (time: number) => void;
  duration: string | number;
}

const Difficulty: React.FC<DifficultyProps> = ({ setTimer, duration }) => {
  return ( 
        <div className={styles.difficulty}>
        <p className={styles.difficultWord}>Difficulty:</p>
        <select 
        className={styles.difficultySelect}
        value={duration}
        onChange={(e) => {
          setTimer(parseInt(e.target.value, 10))
        }}
        >
         <option value={120}>Beginner</option> 
         <option value={60}>Intermediate</option> 
         <option value={30}>Expert</option> 
         <option value={20}>James Cooray Smith</option> 
        </select>
        </div>
     );
}
 
export default Difficulty;