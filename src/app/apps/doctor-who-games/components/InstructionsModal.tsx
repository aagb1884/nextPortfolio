import styles from '../../../styles/wesley.module.css'

function InstructionsModal ({showInstructions, setShowInstructions}) {

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
        
            <ul>
                <li>Type your query into the text box.</li>
                <li>Check for truth.</li>
                <li>Until you hit &quot;Clear&quot; you won&apos;t be able to check the same query more than once.</li>
            </ul>
        </section>
        <button onClick={() => {setShowInstructions(!showInstructions)}}>Hide Instructions</button>
        </div>
    
        </div>
    )
};

export default InstructionsModal;