import Image from "next/image";
import { rounds } from "../data/questions";
import { notFound } from "next/navigation";
import styles from "@/app/styles/whoQuiz.module.css";
import backgroundVortex from "../../../../../public/images/drWhoQuiz/vortex.jpg";
import AppsFooter from "../../components/AppsFooter";
import KoFiLink from "@/app/ui/KoFi";
import PageContent from "./content";

export const metadata = {
  title: "A Doctor Who Quiz",
  openGraph: {
    title: "A Doctor Who Quiz",
    description:
      "Someone is sharing this Doctor Who quiz, probably because it&apos;s so mint.",
  },
};

export default async function RoundPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const round = rounds.find((r) => r.slug === slug);

  if (!round) {
    notFound();
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.backgroundVortexDiv}>
        <Image src={backgroundVortex} fill={true} alt="Background Vortex" />
      </div>
      <div className={styles.drWhoQuizLanding}>
        <PageContent name={round.slug} round={round} />
      </div>
      <footer className={styles.whoQuizFooter}>
        <AppsFooter />
        <KoFiLink />
      </footer>
    </div>
  );
}
