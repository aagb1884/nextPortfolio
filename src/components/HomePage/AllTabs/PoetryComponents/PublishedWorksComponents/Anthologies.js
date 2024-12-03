import styles from '../../../../../app/tabs.module.css';
import ExternalLinkImage from '@/app/ui/ExternalLink';

const Anthologies = () => {
    return ( 
<section>
<h3><u>Anthologies</u></h3>
      <ul className={styles.anthologies}>
        <li><i>Forty Voices Strong</i>, 2019 (Grayson Books) <a href="https://graysonbooks.com/forty-voices-strong.html">[Buy Here<ExternalLinkImage/>]</a></li>
        <li><i>Umbrellas of Edinburgh</i>, 2020 (Shoreline of Infinity) <a href="https://www.shorelineofinfinity.com/product/umbrellas-of-edinburgh/">[Buy Here<ExternalLinkImage/>]</a></li>
        <li><i>The Last Song: Word for Frightened Rabbit</i>, 2023 (Broken Sleep Books) <a href="https://www.brokensleepbooks.com/product-page/ed-aaron-kent-maria-sledmere-the-last-song-words-for-frightened-rabbit">[Buy Here<ExternalLinkImage/>]</a></li>
        <li><i>Masculinity: an anthology of modern voices</i>, 2024 (Broken Sleep Books) <a href="https://www.brokensleepbooks.com/product-page/masculinity-an-anthology-of-modern-voices">[Buy Here<ExternalLinkImage/>]</a></li>
        {/* <li><i>The Spec Book 2024</i>, 2024 (Speculative Books) <a href="https://www.brokensleepbooks.com/product-page/masculinity-an-anthology-of-modern-voices">[Buy Here<ExternalLinkImage/>]</a></li> */}
      </ul>
      <br />
</section>

     );
}
 
export default Anthologies;