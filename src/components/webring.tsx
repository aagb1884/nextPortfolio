import styles from "@/app/styles/page.module.css";
import Link from "next/link";

const Webring = () => {
    return ( 
        <div className={styles.webring}>
        <div className={styles.webringLinks}>
        <Link title="Webring: Previous site" href="https://join-the-cool.club/members/andrew?prev" >⬅️</Link>
        <Link href="https://join-the-cool.club/members/andrew" >🧊</Link>
        <Link href="https://join-the-cool.club/members/andrew?next" >➡️</Link>
        </div>
        <Link href="https://join-the-cool.club/"><p className={styles.webringText}>Webring</p></Link>
        </div>
     );
}
 
export default Webring;