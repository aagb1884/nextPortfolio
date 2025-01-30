import styles from '../../../styles/wesley.module.css'
import Link from 'next/link';

interface InstructionsModalProps {
    setShowInstructions: (value: boolean) => void;
    showInstructions: boolean;
  }

const AiInstructionsModal: React.FC<InstructionsModalProps> =  ({showInstructions, setShowInstructions}) => {

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
            <p>You need to sort them into order of <Link href="https://en.wikipedia.org/wiki/Appreciation_Index">Appreciation Index</Link> scores - highest to lowest - before the time runs out.</p> 
            <p>If two or more stories have the same Appreciation Index score then sort them into broadcast order.</p> 

            <h2>Some notes:</h2>
            <ul className={styles.modalUl}>
                <li>Not all stories have recorded AI scores. These ones are filtered out.</li>
                <li>For multi-part stories AI scores are based on an average rounded to the nearest 0.5.</li>
                <li>Any multi-part story with less than half its episodes scored have been filtered out.</li>
                <li>Different eras had differently weighted AI scores, and <Link href="https://tardis.fandom.com/wiki/Appreciation_Index">different providers of these scorers.</Link></li>
                <li>AI scores have been sourced from <Link href="https://en.wikipedia.org/wiki/List_of_Doctor_Who_episodes_(2005%E2%80%93present)">here</Link> and <Link href="https://guide.doctorwhonews.net/info.php?detail=ratings&start=0&type=date&order=">here</Link>.</li>
            </ul>
            <ul className={styles.modalUl}>
                <li>You can change the difficulty setting, which changes the time limit.</li>
                <li>You can filter by Doctor (except for Doctors who have fewer than 8 TV stories with AI scores).</li>
                <li>You can filter stories by era (i.e. the &quot;Classic&quot; or &quot;New Who&quot; eras).</li>
                <li>You can filter stories by AI score provider.</li>
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

export default AiInstructionsModal;