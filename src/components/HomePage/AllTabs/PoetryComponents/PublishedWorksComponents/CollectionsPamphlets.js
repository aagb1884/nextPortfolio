import styles from '../../../../../app/tabs.module.css';
import ExternalLinkImage from '@/app/ui/ExternalLink';

const CollectionsPamphlets = () => {
    return ( 
    <section>
     <h3><u>Collections/Pamphlets</u></h3>
     <ul className={styles.collections}>
        <li><i>An Intense Young Man at An Open Mic Night</i>, 2017 (House of Three Press) [Out of Print]</li>
        <li><i>The R-Pattz Facttz 2020</i>, 2020 (Speculative Books) <a href="https://www.speculativebooks.net/shop/facttz">[Buy Here<ExternalLinkImage/>]</a><br/>
        <a href="https://emmalee1.wordpress.com/2020/11/04/the-r-pattz-facttz-andrew-blair-speculative-books-book-review/">Emma Lee Review<ExternalLinkImage/></a><br/>
        <a href="https://www.sphinxreview.co.uk/index.php/opoi-reviews-2020/andrew-blair-the-r-pattz-facttz">OPOI Review<ExternalLinkImage/></a>
        </li>
        <li><i>An Intense Young Man at An Open Mic Night</i>, 2024 (Self-Published) <a href="https://ko-fi.com/s/582ed13a4b">[Buy Here<ExternalLinkImage/>]</a><br />
        </li>
      </ul>
    </section> );
}
 
export default CollectionsPamphlets;