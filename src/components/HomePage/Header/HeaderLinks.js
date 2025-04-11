import Header from "./TitleHeading";
import AboutMe from "../About Me";
import Webring from "@/components/webring";
import Image from "next/image";
import github from "../../../../public/images/icons8-github-96.png";
import apps from "../../../../public/images/application.png";
import contactForm from "../../../../public/images/icons8-email-96.png";
import blog from "../../../../public/images/icons8-blog-96.png";
import styles from "../../../app/styles/Header.module.css";
import Link from "next/link";

const HeaderLinks = ({ showForm, setShowForm }) => {
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
          <li>
            <a href="https://github.com/aagb1884">
              <Image
                src={github}
                title="Github Profile"
                alt="github"
                width={50}
              ></Image>
            </a>
          </li>
          <li>
            <Link href="/apps">
              <Image
                src={apps}
                title="Applications Page"
                alt="apps"
                width={50}
              ></Image>
            </Link>
          </li>
          {/* <li><a href="https://www.linkedin.com/in/andrew-blair-3604a0273/"><Image src={linkedin} title="LinkedIn Profile" alt="linked-in" width={50}  ></Image></a></li> */}
          <li>
            <Webring />
          </li>
          <li>
            <Link href="/blog">
              <Image src={blog} title="Blog Page" alt="blog" width={50}></Image>
            </Link>
          </li>
          <li>
            <button
              className={styles.contactFormHeaderButton}
              onClick={displayForm}
            >
              <Image
                src={contactForm}
                title="Contact Form"
                alt="contact-form"
                width={50}
              ></Image>
            </button>
          </li>
        </ul>
      </nav>
      <br />
    </header>
  );
};

export default HeaderLinks;
