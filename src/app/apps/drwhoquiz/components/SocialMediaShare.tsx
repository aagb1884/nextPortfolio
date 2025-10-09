import React from "react";
import { 
        WhatsappShareButton, WhatsappIcon,
        EmailShareButton, EmailIcon 
    } from 'react-share';
import styles from '../../../styles/BFApp.module.css';
import Image from "next/image";

interface Props {
    result: string;
    setShowModal: (bool:boolean) => void;
}

const SocialMediaShare = ({result, setShowModal}: Props) => {

    const shareUrl = "https:/andrewblair.co.uk/apps/drwhoquiz/";
    const shareQuote = `${result}.`;
    const shareTitle = "A Big Bunch of Doctor Who Quizzes? Each more fiendish than the last?";

    const bigOlShareText = `${shareTitle}:
    
    ${shareQuote}
    
    Generate yours at ${shareUrl}`

    const handleCopyClick = async () => {
        try {
            await window.navigator.clipboard.writeText(bigOlShareText);
            alert("Copied to clipboard!");
        } catch (err) {
            console.error(
                "Unable to copy to clipboard.",
                err
            );
            alert("Copy to clipboard failed.");
        }
    };

    return ( 
        <section className={styles.shareModal}>
            <h4 style={{'color': 'white'}}>Share this on your social channels.</h4>
        
        <div className={styles.socialMediaShare}>
        <div className={styles.whatsapp}>
            <WhatsappShareButton
            url={shareUrl}
            title={shareTitle}
            separator=" "
            >
                <WhatsappIcon size={30} />
            </WhatsappShareButton>
        </div>
        <div className={styles.email}>
            <EmailShareButton
            url={shareUrl}
            body={shareQuote}
            subject={shareTitle}
            separator=" "
            >
            <EmailIcon size={30} />
            </EmailShareButton>
        </div>
        <div className={styles.copyClipboard}>
            <button
            onClick={handleCopyClick}
            >
            <Image
            src="/images/icons8-copy-to-clipboard-48.png"
            alt="Copy to Clipboard icon by Icons8"
            title="Copy to Clipboard (icon by Icons8)"
            id="clipboard"
            width={30}
            height={30}
            />
            </button>
        </div>

        </div>
        <div 
        className={styles.close}
        style={{'color': 'white'}}
        onClick={() => {setShowModal(false)}}>
        X
        </div>

        </section>
     );
}
 
export default SocialMediaShare;