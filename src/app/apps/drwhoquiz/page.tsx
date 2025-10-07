import styles from "../../styles/whoQuiz.module.css";
import AppsFooter from "../components/AppsFooter";
import KoFiLink from "@/app/ui/KoFi";
import backgroundVortex from "../../../../public/images/drWhoQuiz/vortex.jpg"
import Image from "next/image";
import Header from "./components/header";
import RoundButtons from "./components/RoundButtons";

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
  <div className={styles.mainContainer}>
  <div className={styles.backgroundVortexDiv}>
    <Image src={backgroundVortex} fill={true} alt="Background Vortex" />
  </div>

  <div className={styles.drWhoQuizLanding}>
    <Header />
    <RoundButtons />
  </div>

  <footer className={styles.whoQuizFooter}>
    <AppsFooter />
    <KoFiLink />
  </footer>
</div>
  );
};

export default drWhoQuiz;
