'use client'
import styles from '@/app/styles/rapName.module.css';
import { useState } from "react";
import ProcessingModal from './processing_modal';
import AppsFooter from '../../components/AppsFooter';

const RapNameGenerator = () => {
    const [userName, setUsername] = useState("");
    const [rapName, setRapName] = useState("");
    const [showName, setShowName] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value);
      } 

    function getRapName(e: React.FormEvent) {
        e.preventDefault()
        setShowModal(true)
        setTimeout(()=> {
        setShowModal(false)
        setRapName(userName)
        setUsername("")
        setShowName(true)
        }, 30500)
    }

    const btnText = rapName.length > 0 ? `You don't need another one.` : `What's my rap name?`

    return ( 
        <section className={styles.rng}>
        <header className={styles.rngHeader}>
        <div className={styles.headerWrapper}>
        <div className={styles.h1}> RAP NAME </div>
        <div className={styles.h2}> GENERATOR </div>
        </div>
        </header>

        <form 
        className={styles.form}
        onSubmit={getRapName}
        >
          <input
            className={styles.rngInput}
            name="userName"
            value={userName}
            onChange={handleChange}
            disabled={rapName.length > 0}
            placeholder={rapName.length > 0 ? "You've got a rap name now." : "Type your name..."}
          />
          <button
            className={styles.rngBtn}
            type="submit"
            disabled={userName.length === 0}
          > 
            {btnText}
          </button>
        </form>
        {showModal && (
            <ProcessingModal />
        )}
        {showName && (
            <div className={styles.rapname}>
            <p>Your rap name is {rapName}</p>
            </div>
        )}
        <div className={styles.footer}>
        <AppsFooter />
        </div>
        </section>
     );
}
 
export default RapNameGenerator;