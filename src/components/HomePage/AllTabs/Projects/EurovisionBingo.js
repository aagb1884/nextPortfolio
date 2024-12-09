import {useState} from 'react';
import Link from 'next/link';
import Minimise from '../../Minimise';
import styles from '../../../../app/styles/tabs.module.css';
import ExternalLinkImage from '@/app/ui/ExternalLink';

const EurovisionBingo = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    return ( 
      <section className={styles.project}>
      <h2 onClick={toggleVisibility}>Eurovision Bingo</h2>
      {isVisible &&   
        <div className={styles.projectDescription}>
          <br />
        <h3>Solo JavaScript Project: </h3>
       <p>A React app that produces a bingo card of six Eurovision cliches as buttons.</p>
       <p>Built in my spare time in the week before Eurovision 2023 primarily because I wanted to, 
       it improved my understanding of front end Javascript and CSS.</p>
       <br />
       <iframe width={560} height={315} src="https://www.youtube.com/embed/ojCOF79gFyU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <br />
        <br />

        <h4 className={styles.techStack}>The Tech Stack</h4>
        
        <ul>
            <li>JavaScript ES6</li>
            <li>React</li>
            <li>CSS</li>
        </ul>
        <br />
        <Link href="https://github.com/aagb1884/eurovisionBingo">Github Repo <ExternalLinkImage/></Link>
        <br />
        <Link href="/apps/eurovision-bingo">Play App here</Link>
        <Minimise toggleVisibility={toggleVisibility} />
        </div>
       
      }
     </section>
    )
}
 
export default EurovisionBingo;