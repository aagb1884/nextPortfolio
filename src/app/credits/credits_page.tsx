'use client'
import styles from '../styles/credits.module.css';
import Link from "next/link";
import ExternalLinkImage from "../ui/ExternalLink";
import HomeFooter from '@/components/HomePage/Footer/HomeFooter';
import { useGlobalState } from '@/app/context/GlobalStateContext';

const CreditsPage = () => {
    const { goToContactForm, goToTab, contact, tabs } = useGlobalState();

    return ( 
        <section className={styles.creditsContainer}>
            <h1>Credits</h1>

            <ul className={styles.creditsUl}>
                <h4>Icons</h4>
                <li>
                <Link target="_blank" href="https://icons8.com/icon/xUOnLwv6j89J/beard">Beard <ExternalLinkImage /> </Link>
                </li>
                <li>
                <Link target="_blank" href="https://icons8.com/icon/pwQ5RLL0yJgu/email">Email <ExternalLinkImage /> </Link> icon by <Link target="_blank" href="https://icons8.com">Icons8 <ExternalLinkImage /> </Link>
                </li>
                <li>
                <Link target="_blank" href="https://icons8.com/icon/63777/github">GitHub <ExternalLinkImage /> </Link> icon by <Link target="_blank" href="https://icons8.com">Icons8 <ExternalLinkImage /> </Link>
                </li>
                <li>
                <Link target="_blank" href="https://icons8.com/icon/xuvGCOXi8Wyg/linkedin">LinkedIn <ExternalLinkImage /> </Link> icon by <Link target="_blank" href="https://icons8.com">Icons8 <ExternalLinkImage /> </Link>
                </li>
                <li>
                <Link target="_blank" href="https://icons8.com/icon/18734/copy-to-clipboard">Copy to Clipboard <ExternalLinkImage /> </Link> icon by <Link target="_blank" href="https://icons8.com">Icons8 <ExternalLinkImage /> </Link>
                </li>
                <li>
                <Link target="_blank" href="https://icons8.com/icon/1OU2pduLotIA/blog">Blog <ExternalLinkImage /> </Link> icon by <Link target="_blank" href="https://icons8.com">Icons8 <ExternalLinkImage /> </Link>
                </li>
                <li>
                <Link href="https://www.flaticon.com/free-icons/external-link" title="external link icons">External link icons created by Yudhi Restu - Flaticon <ExternalLinkImage /> </Link>
                </li>
            </ul>
            <ul className={styles.imagesUl}>
            <h4>Images</h4>
                <li>
                <Link target="_blank" href="https://www.publicdomainpictures.net/en/view-image.php?image=475095&picture=starry-stars-sky-night">Starry Stars Sky Night <ExternalLinkImage /> </Link> image by <Link target="_blank" href="https://www.publicdomainpictures.net/en/browse-author.php?a=149229">Andrea Stöckel <ExternalLinkImage /> </Link>
                </li>
                <li>
                <Link target="_blank" href="https://commons.wikimedia.org/wiki/File:Next_Store_at_Castlepoint.jpg">Next Store at Castlepoint by Dorsetdude <ExternalLinkImage />. </Link>
                </li>
                <li>
                <Link target="_blank" href="https://www.pexels.com/photo/portrait-of-smiling-blonde-woman-19161819/">Smiling Blonde Woman by Karina Rymarchuk <ExternalLinkImage />. </Link>
                </li>
                <li>
                <Link target="_blank" href="https://www.pexels.com/photo/person-feeling-pain-in-the-knee-11349880/">Person feeling pain in the knee by Towfiqu barbhuiya <ExternalLinkImage />. </Link>
                </li>
                <li>
                <Link target="_blank" href="https://stocksnap.io/photo/heidelberg-germany-WXMQNKRE6Y">Heidelberg <ExternalLinkImage />. </Link> <Link target="_blank" href="https://stocksnap.io/author/29367">Roman Kraft <ExternalLinkImage /></Link>
                </li>
         
            </ul>
            <ul className={styles.cssUl}>
            <h4>CSS</h4>
                <li>
                <Link target="_blank" href="https://lenadesign.org/2021/05/18/css-bouncing-text-animation/">Bouncing Text Animation <ExternalLinkImage /> </Link>
                </li>
                <li>
                <Link target="_blank" href="https://codepen.io/TajShireen/pen/LYyOzJL">Metallic Bordered Text <ExternalLinkImage /> </Link> by <Link target="_blank" href="https://codepen.io/TajShireen">Shireen Taj <ExternalLinkImage /> </Link>
                </li>
                <li>
                <Link target="_blank" href="https://codepen.io/Linklvarotrigo/pen/PoKMyNO">text-color-animation <ExternalLinkImage /> </Link> by <Link target="_blank" href="https://codepen.io/Linklvarotrigo">Alvaro <ExternalLinkImage /> </Link>
                </li>
            </ul>
            <HomeFooter
        goToContactForm={goToContactForm}
        goToTab={goToTab}
        contact={contact}
        tabs={tabs}
      />
        </section>
     );
}
 
export default CreditsPage;