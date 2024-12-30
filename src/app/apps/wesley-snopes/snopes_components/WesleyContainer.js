'use client'
import styles from '../../../styles/wesley.module.css';
import Modal from '../snopes_components/modal';
import { useState } from 'react';
import { useGlobalState } from '@/app/context/GlobalStateContext';
import Image from 'next/image';

const WesleyContainer = () => {
    const { showModal, setShowModal } = useGlobalState();
    const imgsrcs = [
        {'image': '/images/wesleySnopes/factionary.png',
        'caption': "That's in Wesley's Factionary"},
        {'image': '/images/wesleySnopes/sorry_what.png', 
        'caption': "i'm sorry what the fuck?"},
        {'image': '/images/wesleySnopes/train_to_factville.png', 
        'caption': "We're on the train to Factville baby"},
        {'image': '/images/wesleySnopes/blade.png', 
        'caption': 'why not?'},
        {'image': '/images/wesleySnopes/balderdash.png', 
        'caption': 'BALDERDASH'},
        {'image':  '/images/wesleySnopes/bull.png', 
        'caption': "This is the shit of a bull"},
        {'image': '/images/wesleySnopes/legit.png', 
        'caption': 'Yeah that sounds legit'},
        {'image': '/images/wesleySnopes/nuh_uh.png', 
        'caption': 'nuh-uh'},
        {'image': '/images/wesleySnopes/physical_realm.png', 
        'caption': 'Truth does not reside in the physical realm'},
        {'image': '/images/wesleySnopes/thirst_for_truth.png', 
        'caption':  "Wesley's thirst for truth has been quenched"},
        {'image':  '/images/wesleySnopes/truth_beauty.png', 
        'caption': 'if something is beautiful but fails to be true was it ever really beautiful?'},
        {'image': '/images/wesleySnopes/back_bullshit.png', 
        'caption': 'hooo boy someone is baaack on their bullshit'},
        {'image': '/images/wesleySnopes/fuck_off.png', 
        'caption': ' '},
        {'image': '/images/wesleySnopes/no.png', 
        'caption': 'no'},
        {'image':  '/images/wesleySnopes/way_u_think.png', 
        'caption': 'I like the way you think'},
        {'image': '/images/wesleySnopes/squint.png', 
        'caption': 'sorry but when i squint...what you said looks even stupider'},
        {'image': '/images/wesleySnopes/question_makes_me_sad.png', 
        'caption': 'your question makes me sad'},
        {'image': '/images/wesleySnopes/nonsense.png', 
        'caption': 'look into my eyes and see the joy fade with your nonsense'},
        {'image': '/images/wesleySnopes/shame.png', 
        'caption': 'have you considered feeling more shame?'},
        {'image': '/images/wesleySnopes/true.png', 
        'caption': "You're goddamn right it's true"},
        {'image': '/images/wesleySnopes/small_no.png', 
        'caption': 'no'},
        {'image':  '/images/wesleySnopes/gosh.png', 
        'caption': 'um'},
        {'image':  '/images/wesleySnopes/cow_bumhole.png', 
        'caption': "your cow's bumhole must be the shape of a ruler because that is some fine ass bullshit"},
        // {'image': '/images/wesleySnopes/pish.png', 
        //     'caption': "it's pish"},
    ];

    const [image, setImage] = useState("")
    const [userQuery, setUserQuery] = useState('');
    const [prevUserQuery, setPrevUserQuery] = useState([]);
    const [warning, setWarning] = useState('');
    
   

    function get_random_response() {
        if ((userQuery.length > 1) && prevUserQuery.includes(userQuery) === false) {
        setImage(imgsrcs[Math.floor(Math.random()* imgsrcs.length)])
        setPrevUserQuery([userQuery, ...prevUserQuery])
        setWarning('');
        } 
        else 
        {
        setImage('');
        setWarning(`YOU ALREADY HAVE YOUR TRUTH. ENTER A DIFFERENT QUERY`)
        }
    }


    function handleInputChange(event) {
        setUserQuery(event.target.value);
    }

      function handleClear() {
        setUserQuery('');
        setImage('');
        setPrevUserQuery([])
      }


    return ( 
        <main className={styles.mainWesley}>
            { showModal && (
                <Modal 
                showModal={showModal}
                setShowModal={setShowModal} />
            )}
            <div className={styles.input}>
            <form className={styles.form}>
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
            <div className={styles.output}>
                <section className={styles.wesleyImageSection}>
                <p>{warning}</p>
                {image && (
                <>
                <Image className={styles.wesleyImage} 
                src={image.image} alt={image.caption}
                width={325} height={400}/>
                <p>{image.caption} </p>
                </>)}
                </section>
            </div>
            
        </main>
     );
}
 
export default WesleyContainer;