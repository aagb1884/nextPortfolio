import Anthologies from "./PublishedWorksComponents/Anthologies";
import CollectionsPamphlets from "./PublishedWorksComponents/CollectionsPamphlets";
import Journals from "./PublishedWorksComponents/Journals";
import React, { useState } from 'react';
import Minimise from '../../Minimise';
import styles from '../../../../app/styles/tabs.module.css';
import ExternalLinkImage from '@/app/ui/ExternalLink';

const PublishedWorks = () => {

    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

    return (  
      <section className={styles.project}>
        <h2 onClick={toggleVisibility}>Published Works</h2>
        {isVisible && 
            <div className={styles.projectDescription}>
      <br />
       <CollectionsPamphlets />
      <br />
      <iframe width={560} height={315} src="https://www.youtube.com/embed/AWgccb62epU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe><br />
      <br />
      <Anthologies />
      <Journals />
      <Minimise toggleVisibility={toggleVisibility} />
      </div>
      }
      </section>
    );
}
 
export default PublishedWorks;