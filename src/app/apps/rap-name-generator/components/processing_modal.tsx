import styles from "@/app/styles/rapName.module.css"

const ProcessingModal = () => {
    
    return ( 
        <div className={styles.modalWrapper}>
        <div className={styles.modal}>
        <video className={styles.video}
        playsInline={true}
        controls preload="none" autoPlay={true}>
        <source src="/video/rap_name_generator.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        </div>
        </div>
     );
}
 
export default ProcessingModal;