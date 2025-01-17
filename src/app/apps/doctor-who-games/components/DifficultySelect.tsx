import styles from "../../../styles/drwho.module.css";

const Difficulty = ({setTimer, duration}) => {
    return ( 
        <div className={styles.difficulty}>
        <p className={styles.difficultWord}>Difficulty:</p>
        <select 
        value={duration}
        onChange={(e) => {
          setTimer(parseInt(e.target.value))
        }}
        >
         <option value={120}>Beginner</option> 
         <option value={60}>Intermediate</option> 
         <option value={30}>Expert</option> 
         <option value={15}>James Cooray Smith</option> 
        </select>
        </div>
     );
}
 
export default Difficulty;