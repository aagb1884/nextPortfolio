import external from '../../../public/images/external-link.png';
import Image from 'next/image';
import styles from '../page.module.css';

const ExternalLinkImage = () => {
    return ( 
        <Image id={styles.externalLink} title='external link' alt='External Link' width={20} src={external} />
     );
}
 
export default ExternalLinkImage;