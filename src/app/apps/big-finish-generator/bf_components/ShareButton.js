import styles from '../../../styles/BFApp.module.css';

const ShareButton = ({setShowModal, showModal}) => {
    return ( 
        <button className={styles.shareButton} data-testid="share-button" onClick={() => {setShowModal(!showModal)}}>Share</button>
             );
}
 
export default ShareButton;