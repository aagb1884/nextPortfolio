'use client'
import styles from '../../../styles/wesley.module.css'
import { useState } from 'react';
import Image from 'next/image';

const WesleyContainer = () => {

    const imgsrcs = [
        '/images/wesleySnopes/sorry_what.png',
        '/images/wesleySnopes/train_to_factville.png',
        '/images/wesleySnopes/blade.png',
        '/images/wesleySnopes/balderdash.png',
        '/images/wesleySnopes/bull.png',
        '/images/wesleySnopes/factionary.png',
        '/images/wesleySnopes/legit.png',
        '/images/wesleySnopes/nuh_uh.png',
        '/images/wesleySnopes/physical_realm.png',
        '/images/wesleySnopes/pish.png',
        '/images/wesleySnopes/thirst_for_truth.png',
        '/images/wesleySnopes/truth_beauty.png',
        '/images/wesleySnopes/back_bullshit.png',
        '/images/wesleySnopes/fuck_off.png',
        '/images/wesleySnopes/no.png',
        '/images/wesleySnopes/way_u_think.png',
        '/images/wesleySnopes/squint.png',
        '/images/wesleySnopes/question_makes_me_sad.png',
        '/images/wesleySnopes/nonsense.png',
        '/images/wesleySnopes/shame.png',
        '/images/wesleySnopes/true.png',
        '/images/wesleySnopes/small_no.png',
        '/images/wesleySnopes/gosh.png',
        '/images/wesleySnopes/cow_bumhole.png'
    ];

    const [image, setImage] = useState("")
    const [userQuery, setUserQuery] = useState('');
    const [prevUserQuery, setPrevUserQuery] = useState('F');
    const [warning, setWarning] = useState('');
   

    function get_random_response() {
        if (prevUserQuery !== userQuery) {
        setImage(imgsrcs[Math.floor(Math.random()* imgsrcs.length)])
        setPrevUserQuery(userQuery)
        setWarning('');
        } 
        else 
        {
        setWarning(`YOU HAVE YOUR TRUTH. 
            ENTER A DIFFERENT QUERY`)
        }
    }

    function handleInputChange(event) {
        setUserQuery(event.target.value);
    }

      function handleClear() {
        setUserQuery('');
        setImage('');
        setPrevUserQuery('F')
      }


    return ( 
        <main className={styles.mainWesley}>
            <div className={styles.input}>
            <form>
                <label htmlFor="user-query"><h2 className={styles.iHeard}>Hey Wesley, I heard...</h2></label>
                <div className={styles.interfaceLayout}>
                <textarea type="text" data-testid="text-input" className={styles.userQuery} id="user-query" name="user-query" maxLength="1000" onChange={handleInputChange}></textarea>
                <button 
                onClick={handleClear} 
                className={styles.clearButton} 
                data-testid="clear-text-button" 
                title="Clear All Text and Images">Clear</button>
                </div>
            </form>
            
                <button 
                onClick={get_random_response} 
                disabled={userQuery.length === 0}
                data-testid="get-truth" 
                className={`${styles.truth} ${userQuery.length === 0 ? styles.truthDisabled : ''}`}
                title="Click here to find out THE TRUTH">IS THAT TRUE?</button>
            </div>
            
                <section className={styles.wesleyImageSection}>
                <p>{warning}</p>
                {image && 
                <Image className={styles.wesleyImage} 
                src={image} alt="Wesley's Response" 
                width={525} height={750}/>}
                </section>
                
            
        </main>
     );
}
 
export default WesleyContainer;