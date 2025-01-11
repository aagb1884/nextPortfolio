import styles from "../../../styles/poetremix.module.css";

function Modal ({setModalOpen}) {
    return (
        <div className={styles.modalWrapper}>
        <div
          className={styles.modal}
          onClick={e => e.stopPropagation()}
        >
        <section className={styles.text}>
            <h1>Please Be Aware of Copyright Laws</h1> 
            <p>If you are looking to publish any remixes you must get permission to use the original work(s).</p>
        </section>
        <button className={styles.modalExitBtn} onClick={() => setModalOpen(false)}>
            Click to Continue on this page
        </button>
        </div>
        
        </div>
    )
};

export default Modal;