'use client'
import styles from '../../styles/BFApp.module.css';
import BFFooter from './bf_components/BFFooter';
import BFHeader from './bf_components/BFHeader';
import ClearAll from './bf_components/ClearAll';
import ShareButton from './bf_components/ShareButton';
import SocialMediaShare from './bf_components/SocialMediaShare';
import MainCharacter from './bf_components/lists/MainCharacter';
import SupportingCharacter from './bf_components/lists/SupportingCharacter';
import Villain from './bf_components/lists/Villain';
import EventLocation from './bf_components/lists/Location';
import { useState } from 'react';
import Image from 'next/image';

const BigFinishGenerator = () => {
    const [mainCharacter, setMainCharacter] = useState("");
    const [supportingCharacter, setSupportingCharacter] = useState("");
    const [villain, setVillain] = useState("");
    const [location, setLocation] = useState("");
    const [showGif, setShowGif] = useState(false);
    const [gif, setGif] = useState("");
    const [showModal, setShowModal] = useState(false);

    function clearAll() {
        setMainCharacter("");
        setSupportingCharacter("");
        setVillain("");
        setLocation("");
        setShowModal(false);
    }

    const pitch = `At last, ${mainCharacter} and ${supportingCharacter} meet ${villain} in ${location}`

    return ( 
        <div className={styles.bfContainer}>
        <BFHeader />
            <section className={styles.randomiser} data-testid="randomiser">
                <div className={styles.randomiserButtons}>
                    <div className={styles.gifWindow}> 
                    {showGif && <Image className={styles.gifImage} src={gif} alt="GIF" width={300} height={225} unoptimized/>} 
                    </div>
                    <div className={styles.firstRow}>
                    <div><MainCharacter 
                    setMainCharacter={setMainCharacter}
                    setShowGif={setShowGif}
                    setGif={setGif} /></div>
                    
                    <div><SupportingCharacter 
                    setSupportingCharacter={setSupportingCharacter}
                    setShowGif={setShowGif}
                    setGif={setGif}  /></div>
                    </div>

                    <div className={styles.secondRow}>
                    <div><Villain 
                    setVillain={setVillain}
                    setShowGif={setShowGif}
                    setGif={setGif}  /></div>
                    
                    <div><EventLocation 
                    setLocation={setLocation} 
                    setShowGif={setShowGif}
                    setGif={setGif} /></div>
                    </div>

                    
                </div>
                <div className={styles.generatedStory}>
                {!mainCharacter && !supportingCharacter && !villain && !location && (
                 <p>Press all four buttons to get your next pitch.</p>
                )}
                {mainCharacter && <p className={styles.mainCharacter}>At last, {mainCharacter}</p>}
                {supportingCharacter && <p className={styles.supportingCharacter}>and {supportingCharacter}</p>}
                {villain && <p className={styles.villain}>will meet {villain}</p>}
                {location && <p className={styles.location}>in {location}</p>}
                </div>
                
                <div className={styles.clearAndShare}>
                    
                {(mainCharacter || supportingCharacter || villain || location) && (
                <div className={styles.additionalButton}>
               
                    <ClearAll clearAll={clearAll} />
                    </div>
                 )} 

                {mainCharacter && supportingCharacter && villain && location && (
                 <div className={styles.additionalButton}>
                    <ShareButton 
                    showModal={showModal}
                    setShowModal={setShowModal}/>
               </div>
                 )} 
                </div>
                {showModal && (
                        <div className={styles.bfShareModal}>
                        <SocialMediaShare 
                        pitch={pitch}
                        setShowModal={setShowModal}/>
                        </div>
                    )}
            </section>
            
        <BFFooter />
        </div>
        
     );
}
 
export default BigFinishGenerator;