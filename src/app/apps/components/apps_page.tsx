"use client";
import Link from "next/link";
import Image from "next/image";
import ExternalLinkImage from "../../ui/ExternalLink";
import styles from "../../styles/appPages.module.css";
import EuroBingoAppLinks from "../../apps/components/eBingoAppLinks";
import BFGeneratorAppLinks from "../../apps/components/bfGeneratorLinks";
import euroBingoGif from "../../../../public/images/eurovision_bingo_button.gif";
import bigFinishGif from "../../../../public/images/bigFinish/untempered_schism.gif";
import deekPrime from "../../../../public/images/deekPrime.jpg";
import wesley from "../../../../public/images/wesleySnopes/button_wesley.png";
import poetRemixer from "../../../../public/images/poetrRemixer.png";
import light from "../../../../public/images/sad-light.png";
import rng from "../../../../public/images/rng.png";
import sfng from "@/app/images/scifinamegen.png";
import HomeFooter from "@/components/HomePage/Footer/HomeFooter";
import { useGlobalState } from "@/app/context/GlobalStateContext";

const AppsPage = () => {
  const { goToContactForm, goToTab, contact, tabs } = useGlobalState();

  return (
    <div className={styles.appLandingPage}>
      <div className={styles.pageContent}>
        <div className={styles.bouncingText}>
          <div className={styles.d}>D</div>
          <div className={styles.a}>A</div>
          <div className={styles.f}>F</div>
          <div className={styles.t}>T</div>
          <div className={styles.space}></div>
          <div className={styles.weeApps}>WEE APPS</div>
        </div>

        <section className={styles.appButtonsComponent}>
          <div className={styles.eurovisionBingo}>
            <Link href="/apps/eurovision-bingo">
              <Image
                src={euroBingoGif}
                alt="eurovision-bingo-button"
                className={styles.buttonImage}
              />
              <div className={styles.buttonText}>Eurovision Bingo</div>
            </Link>
          </div>

          <div className={styles.bigFinishGenerator}>
            <Link href="/apps/big-finish-generator">
              <Image
                src={bigFinishGif}
                alt="big-finish-generator-button"
                className={styles.buttonImage}
              />
              <div className={styles.buttonText}>Big Finish Generator</div>
            </Link>
          </div>

          <div className={styles.wesleySnopes}>
            <Link href="/apps/wesley-snopes">
              <Image
                src={wesley}
                alt="wesley-snopes-button"
                className={styles.buttonImage}
              />
              <div className={styles.buttonText}>Wesley Snopes</div>
            </Link>
          </div>
          <div className={styles.light}>
            <Link href="/apps/light">
              <Image
                src={light}
                alt="Doctor Who/Light games link"
                className={styles.buttonImage}
              />
              <div className={styles.buttonText}>Doctor Who Games</div>
            </Link>
          </div>
          <div className={styles.rngApp}>
            <Link href="/apps/rap-name-generator">
              <Image
                src={rng}
                alt="rap name generator link"
                className={styles.buttonImage}
              />
            </Link>
          </div>
          <div className={styles.sfngApp}>
            <Link href="/apps/sci-fi-name-generator">
              <Image
                src={sfng}
                alt="Sci Fi Name Generator link"
                className={styles.buttonImage}
              />
            </Link>
          </div>
          <div className={styles.poetRemixer}>
            <Link href="/apps/poetremixer">
              <Image
                src={poetRemixer}
                alt="poetRemixer tool link"
                className={styles.buttonImage}
              />
            </Link>
          </div>
          <div className={styles.derekAdams}>
            <Link href="https://scottish-football-simulators.co.uk/">
              <Image
                src={deekPrime}
                alt="Scotish Football Simulators link"
                className={styles.buttonImage}
              />
              <div className={styles.buttonText}>
                Scottish Football Simulators
                <ExternalLinkImage />
              </div>
            </Link>
          </div>
        </section>
        <section className={styles.appsLandingCopy}>
          <aside className={styles.designCredit}>
            Bouncing Text animation by{" "}
            <Link href="https://lenadesign.org/2021/05/18/css-bouncing-text-animation/">
              Lena Design <ExternalLinkImage />
            </Link>
          </aside>
          <p>
            Nine (and counting) apps; some requiring esoteric knowledge of{" "}
            <i>Doctor Who</i>, others less so.
          </p>
          <p>
            You can find more information on each on my{" "}
            <Link href="https://github.com/aagb1884">
              GitHub page <ExternalLinkImage />
            </Link>
            .
          </p>
          <br />
          <aside>
            NB. <i>Wesley Snopes</i>, the{" "}
            <i>Derek Adams Management Simulator</i> and{" "}
            <i>Rangers Manager Simulator</i> are probably not suitable for work.
          </aside>
          <EuroBingoAppLinks />
          <BFGeneratorAppLinks />
        </section>
      </div>
      <HomeFooter
        goToContactForm={goToContactForm}
        goToTab={goToTab}
        contact={contact}
        tabs={tabs}
      />
    </div>
  );
};

export default AppsPage;
