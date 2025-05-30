import Link from "next/link";
import styles from '../../styles/BFApp.module.css';

const AppsFooter = () => {
    return ( 
        <nav className={styles.appPageNavLinks}>
        <ul>
            <li>
            <Link href="/">Home</Link>
            </li>
            <li>
            <Link href="/apps">Apps</Link>
            </li>
            <li>
            <Link href="/blog">Blog</Link>
            </li>
            <li>
            <Link href="/credits">Credits</Link>
            </li>
        </ul>
        </nav>
     );
}
 
export default AppsFooter;