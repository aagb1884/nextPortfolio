const ShareButton = ({setShowModal, showModal}) => {
    return ( 
        <button className="share-button" data-testid="share-button" onClick={() => {setShowModal(!showModal)}}>Share</button>
             );
}
 
export default ShareButton;