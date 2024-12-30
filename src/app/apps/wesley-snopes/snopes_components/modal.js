import styles from '../../../styles/wesley.module.css'

function Modal ({showModal, setShowModal}) {

    return (
        <div className={styles.modalWrapper}>
        <div
          className={styles.modal}
          onClick={e => e.stopPropagation()}
        >
        <section className={styles.modalText}>
            <h1>How this works</h1> 
            <p>This is essentially a Wesley Snipes themed Magic 8-Ball</p> 
        
            <ul>
                <li>Type your query into the text box.</li>
                <li>Check for truth.</li>
                <li>Until you hit &quot;Clear&quot; you won&apos;t be able to check the same query more than once.</li>
            </ul>
        </section>
        <button onClick={() => {setShowModal(!showModal)}}>Hide Instructions</button>
        </div>
    
        </div>
    )
};

export default Modal;