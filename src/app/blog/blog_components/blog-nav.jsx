import Link from "next/link";
import styles from '../../styles/blog.module.css'

const BlogNav = () => {
    return ( 
        <nav style={{'width': '100%', 'marginBottom': '15px'}}>
            <ul className={styles.blogNav}>
        
            <li>
            <Link href="/blog">Blog Home</Link> 
            </li>
       
            <li>
            <Link href="/apps">Apps</Link> 
            </li>  

            <li>
            <Link href="/">Portfolio Home</Link> 
            </li>
            </ul>
        </nav>
     );
}
 
export default BlogNav;