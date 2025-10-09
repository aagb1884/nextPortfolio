
import Image from 'next/image';
import { rounds } from '../data/questions';
import { notFound } from 'next/navigation';
import styles from "@/app/styles/whoQuiz.module.css"
import backgroundVortex from "../../../../../public/images/drWhoQuiz/vortex.jpg"
import AppsFooter from '../../components/AppsFooter';
import KoFiLink from '@/app/ui/KoFi';
import PageContent from './content';

export default async function RoundPage({ params }: { params: { slug: string } }) {
  const round = rounds.find((r) => r.slug === params.slug);

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
