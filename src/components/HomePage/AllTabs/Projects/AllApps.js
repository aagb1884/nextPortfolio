import {useState} from 'react';
import Link from 'next/link';
import Minimise from '../../Minimise';
import styles from '../../../../app/styles/tabs.module.css';

const AllApps = () => {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

    return ( 
      <section className={styles.project}>
      <h2 onClick={toggleVisibility}>Daft Wee Apps</h2>
      {isVisible &&   
       
            <div className={styles.projectDescription}>
<br />
                  <h3>Multiple Projects</h3>
       <p>Some silly apps that I created for fun and to consolidate what I'd learned from my coursework, including the Eurovision Bingo app mentioned above,
        a Wesley-Snipes themed fact checker, and a text-based adventure game taking you through the recent career of Scottish football manager Derek Adams.
       </p>
        <br />
        <Link href="/apps">See All Apps</Link>
        <Minimise toggleVisibility={toggleVisibility} />
                </div>
              
      }
            </section>
     

     );
    }
 
export default AllApps;