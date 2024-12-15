import {useState} from 'react';
import Image from 'next/image';
import sfs from '../../../../../public/images/sfs.png'; 
import Link from 'next/link';
import Minimise from '../../Minimise';
import styles from '../../../../app/styles/tabs.module.css';
import ExternalLinkImage from '@/app/ui/ExternalLink';

const ScottishFootballSims = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

    return (  <section className={styles.project}>
      <h2 onClick={toggleVisibility}>Scottish Football Simulators</h2>
      {isVisible &&     

      <div className={styles.projectDescription}>
       <p>This website hosts my Scottish football-themed games.</p> 
       <p>Currrently there are two text adventures -  The Derek Adams Management Simulator, the Rangers Manager Simulator - and a version of the 2048 puzzle game based around Hibs managers.</p>
       <p>These have been built from tutorials in my spare time with a view to learning how to make browser-based games.</p>
       <br />
       <h4 className={styles.techStack}>The Tech Stack</h4>
        
        <ul>
            <li>JavaScript ES6</li>
            <li>React JS</li>
            <li>React TS</li>
            <li>CSS</li>
        </ul>
        <br />
        <a href="https://github.com/aagb1884/scottish_football_sim">Github Repo <ExternalLinkImage/></a>
        <br />
        <Image src={sfs} alt="Scottish Foootball Simulators Homepage" width="600" height="400" />
        <br />
        <Link href="https://scottish-football-simulators.co.uk/">Link <ExternalLinkImage/> </Link>
        <Minimise toggleVisibility={toggleVisibility} />
        </div>  
      }
       </section>
     )}
 
export default ScottishFootballSims;