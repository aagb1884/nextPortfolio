'use client'
import styles from "../../styles/poetremix.module.css";
import MainContainer from './components/MainContainer';
import Modal from './components/modal';
import { useState } from 'react';
import AppsFooter from "../components/AppsFooter";

function PoetryApp() {
  const [modalOpen, setModalOpen] = useState(true)

  return (
    <div className={styles.poetryApp}>
       <div className={styles.poetFooter}>
      <AppsFooter />
      </div>
      <div className={styles.title}>
        <p className={styles.poetr}>poetr</p><p className={styles.emixer}>EMIXER  </p><p className={styles.tool}> Tool</p>
      </div>
     
      {modalOpen && (
          <Modal
          setModalOpen={setModalOpen} />
        )}
      <MainContainer />
     
    </div>
  );
}

export default PoetryApp;
