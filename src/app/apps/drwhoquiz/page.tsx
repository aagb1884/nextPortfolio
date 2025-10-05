import styles from "../../styles/whoQuiz.module.css";
import AppsFooter from "../components/AppsFooter";
import KoFiLink from "@/app/ui/KoFi";
import backgroundVortex from "../../../../public/images/drWhoQuiz/vortex.jpg"
import Image from "next/image";
import Header from "./components/header";

export const metadata = {
  title: "Doctor Who Quiz",
  openGraph: {
    title: "Doctor Who Quiz",
    description:
      "It's a bunch of quizzes about Doctor Who, each more fiendish than the last.",
  },
};

const drWhoQuiz = () => {
  return (
    <div className="background-vortex-div"
     style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}>
      <Image src={backgroundVortex} fill={true} alt="Background Vortex" />
    <div className={styles.drWhoQuizLanding}>
      
     <header className={styles.drWhoQuizHeader}>
        <Header />
      </header>
      <main>
        
      </main>

      <footer className={styles.whoQuizFooter}>
        <AppsFooter />
       
        <KoFiLink />
        </footer>
      </div>
      </div>
  );
};

export default drWhoQuiz;
