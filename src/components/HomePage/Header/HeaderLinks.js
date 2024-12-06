import Header from "./TitleHeading";
import AboutMe from "../About Me";
import Image from "next/image";
import github from "../../../../public/images/icons8-github-96.png";
import linkedin from "../../../../public/images/icons8-linkedin-96.png";
import contactForm from "../../../../public/images/icons8-email-96.png";
import styles from '../../../app/styles/Header.module.css'

const HeaderLinks = ({showForm, setShowForm}) => {

    function displayForm() {
        setShowForm(!showForm);
    }


    return ( 
    <header className={styles.headerSection}>
        <Header />
        <AboutMe />
        <br />
        <nav>
        <ul className={styles.links}>
            <li><a href="https://github.com/aagb1884"><Image src={github} title="Github Profile" alt="github" width={50} ></Image></a></li>
            <li><a href="https://www.linkedin.com/in/andrew-blair-3604a0273/"><Image src={linkedin} title="LinkedIn Profile" alt="linked-in" width={50}  ></Image></a></li>
            <li><button className={styles.contactFormHeaderButton} onClick={displayForm} ><Image src={contactForm} title="Contact Form" alt="contact-form" width={50}  ></Image></button></li>
        </ul>  
        </nav>
        <br />
    </header>  

     );
}
 
export default HeaderLinks;