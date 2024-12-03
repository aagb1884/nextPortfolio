import styles from '../../../../../app/tabs.module.css';
import ExternalLinkImage from '@/app/ui/ExternalLink';

const Journals = () => {
    return ( 
<section>
        <h3><u>Journals</u></h3>
      <ul className={styles.journals}>
        <li>Valve #3 [Out of Print]</li>
        <li>Valve #4 [Out of Print]</li>
        <li>Gutter #13 <a href="https://www.guttermag.co.uk/getgutter/gutter-13">[Buy Here<ExternalLinkImage/>]</a></li>
        <li>Gutter #14 <a href="https://www.guttermag.co.uk/getgutter/gutter-14">[Buy Here<ExternalLinkImage/>]</a></li>
        <li>Gutter #15 [Out of Print]</li>
        <li>Gutter #17 <a href="https://www.guttermag.co.uk/getgutter/gutter-17">[Buy Here<ExternalLinkImage/>]</a></li>
        <li>Gutter #20 <a href="https://www.guttermag.co.uk/getgutter/09zxga28buddvcfjmby7z8kh0xz6e0">[Buy Here<ExternalLinkImage/>]</a></li>
        <li>Gutter #22 [Out of Print]</li>
        <li>404 Ink #3 [Out of Print]</li>
      </ul>
      <br />

      </section>
     );
}
 
export default Journals;