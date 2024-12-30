export const metadata = {
    title: 'Wesley Snopes',
    openGraph: {
      title: 'Wesley Snopes',
      description: 'Let Wesley Snipes guide you to the truth.',
    },
  }

import styles from '../../../app/styles/wesley.module.css';
import WesleyHeader from './snopes_components/WesleyHeader';
import WesleyContainer from './snopes_components/WesleyContainer';
import WesleyFooter from './snopes_components/WesleyFooter';

const WesleySnopes = () => {
  
    return ( 
        <div className={styles.wesleySnopesApp}>
        <WesleyHeader />
        <WesleyContainer />
        <WesleyFooter />
        </div>
        
     );
}
 
export default WesleySnopes;