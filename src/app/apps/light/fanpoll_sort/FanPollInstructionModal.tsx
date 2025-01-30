import styles from '../../../styles/wesley.module.css'
import Link from 'next/link';

interface InstructionsModalProps {
    setShowInstructions: (value: boolean) => void;
    showInstructions: boolean;
  }

const FanPollInstructionsModal: React.FC<InstructionsModalProps> =  ({showInstructions, setShowInstructions}) => {

    return (
        <div onClick={() => {setShowInstructions(!showInstructions)}} 
        className={styles.modalWrapper}>
        <div
          className={styles.modal}
          onClick={e => e.stopPropagation()}
        >
        <section className={styles.modalText}>
            <h1>How this works</h1> 
            <p>You will be given a list of eight <i>Doctor Who</i> stories.</p> 
            <p>You need to sort them into the order of quality - highest to lowest, deemed correct by a fan poll - before the time runs out.</p> 
            <p></p> 

            <h2>Some notes:</h2>
            <ul className={styles.modalUl}>
                <li>The most complete fan poll available was from 2020, and covers every story up to The Timeless Children.</li>
                <li>It is <Link href="https://x.com/big_dr_who_poll/status/1259045711792033793?s=46&t=s0vH-cy9YijfVrfmla2Iig">this fan poll</Link> [opens a Twitter link].</li>
            </ul>
            <ul className={styles.modalUl}>
                <li>You can change the difficulty setting, which changes the time limit.</li>
                <li>You can filter by Doctor (except for Doctors whose stories do not feature in the 2020 fan poll).</li>
                <li>You can filter stories by era (i.e. the &quot;Classic&quot; or &quot;New Who&quot; eras).</li>
                <li>If you change the difficulty or filter during a game then a new game will start.</li>
                <li>You can&apos;t use more than one filter at a time.</li>
            </ul>
        </section>
        <button className={styles.hideModalBtn} 
        onClick={() => {setShowInstructions(!showInstructions)}}>Hide Instructions</button>
        </div>
    
        </div>
    )
};

export default FanPollInstructionsModal;