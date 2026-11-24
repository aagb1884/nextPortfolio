"use client";
import Link from "next/link";
import { modalProps } from "../../../barlow/components/modal";
import styles from "@/app/styles/whoQuiz.module.css";
import ExternalLink from "@/components/ExternalLink";

const CreditsModal: React.FC<modalProps> = ({ setModalOpen }) => {
  return (
    <>
      <div
        className={styles.startModalWrapper}
        onClick={() => setModalOpen(false)}
      />
      <div className={styles.startModal}>
        <h2 className={styles.sModalHTxt}>Quiz Credits</h2>
        <p className={styles.sModalTxt}>
          Quizzes written by <Link href="/">Andrew Blair</Link> and&nbsp;
          <ExternalLink
            href="https://bsky.app/profile/markharrison.bsky.social"
            text="Mark Harrison"
          />
          .
        </p>
        <p className={styles.sModalTxt}>
          Website developed and maintained by Andrew Blair.
        </p>
        <br />
        <p className={styles.sModalTxt}>
          <i>Doctor Who</i>, <i>Torchwood</i>, <i>The Sarah Jane Adventures</i>
          &nbsp; and <i>K9 and Company</i> are copyright of the BBC.
        </p>
        <p className={styles.sModalTxt}>
          The TARDIS is a trademark of the BBC.
        </p>
        <p className={styles.sModalTxt}>
          The Daleks are a trademark of the Terry Nation Estate.
        </p>
        <p className={styles.sModalTxt}>
          Exploding Dalek illustration by&nbsp;
          <ExternalLink
            href="https://tardis.fandom.com/wiki/Roy_Knipe"
            text="Roy Knipe"
          />
          .
        </p>
        <br />
        <p className={styles.sModalTxt}>
          All information probably correct as of November 2025.
        </p>
        <ul>
          Sources:
          <li>
            <ExternalLink
              href="https://tardis.fandom.com/"
              text="TARDIS Fandom"
            />
          </li>
          <li>
            <ExternalLink
              href="https://tardis.wiki/wiki/Doctor_Who_Wiki"
              text="TARDIS Wiki"
            />
          </li>
          <li>
            <ExternalLink
              href="http://www.chakoteya.net/DoctorWho/"
              text="chakoteya.net Transcripts"
            />
          </li>
          <li>
            <ExternalLink
              href="http://www.shannonsullivan.com/doctorwho/"
              text="A Brief History of Time Travel"
            />
          </li>
        </ul>
        <button className={styles.btn} onClick={() => setModalOpen(false)}>
          Close
        </button>
      </div>
    </>
  );
};

export default CreditsModal;
