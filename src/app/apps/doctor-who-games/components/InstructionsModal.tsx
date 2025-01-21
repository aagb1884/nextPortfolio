import styles from '../../../styles/wesley.module.css'

interface InstructionsModalProps {
    setShowInstructions: (value: boolean) => void;
    showInstructions: boolean;
  }

const InstructionsModal: React.FC<InstructionsModalProps> =  ({showInstructions, setShowInstructions}) => {

    return (
        <div className={styles.modalWrapper}>
        <div
          className={styles.modal}
          onClick={e => e.stopPropagation()}
        >
        <section className={styles.modalText}>
            <h1>How this works</h1> 
            <p>You will be given a list of eight <i>Doctor Who</i> stories.</p> 
            <p>You need to sort them into chronological order before the time runs out.</p> 
        
            <ul className={styles.modalUl}>
                <li>You can change the difficulty setting, which changes the time limit.</li>
                <li>You can filter by Doctor (except for Doctors who have fewer than 8 TV stories).</li>
                <li>If you change the difficulty or filter during a game then a new game will start.</li>
                <li>You can&apos;t use both filters at once.</li>
            </ul>
        </section>
        <button className={styles.hideModalBtn} 
        onClick={() => {setShowInstructions(!showInstructions)}}>Hide Instructions</button>
        </div>
    
        </div>
    )
};

export default InstructionsModal;