import Link from "next/link";
import styles from '../../BFApp.module.css';

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
            <Link href="/credis">Credits</Link>
            </li>
        </ul>
        </nav>
     );
}
 
export default AppsFooter;