'use client'
import styles from '../../../styles/wesley.module.css'
import { useGlobalState } from '@/app/context/GlobalStateContext';
import HomeFooter from '@/components/HomePage/Footer/HomeFooter';

const WesleyFooter = () => {
    const { goToContactForm, goToTab, contact, tabs } = useGlobalState();
    return ( 
        <footer className={styles.wesleyFooter}>
        <div className={styles.ftr}>NB: I have neither seen nor read Blade.</div>
        <div className={styles.navFooter}>
        <HomeFooter
        goToContactForm={goToContactForm}
        goToTab={goToTab}
        contact={contact}
        tabs={tabs}
        />
        </div>
        </footer>
     );
}
 
export default WesleyFooter;