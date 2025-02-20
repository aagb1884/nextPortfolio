'use client'
import styles from '@/app/styles/rapName.module.css';
import { useState } from "react";

const RapNameGenerator = () => {
    const [userName, setUsername] = useState("");
    const [showName, setShowName] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value);
      } 

    function getRapName(e: React.FormEvent) {
        e.preventDefault()
        setShowName(true)
    }

    return ( 
        <>
        <p>Rap Name Generator</p>
        <form 
        className={styles.form}
        onSubmit={getRapName}
        >
          <input
            className={styles.barlowInput}
            name="userName"
            value={userName}
            onChange={handleChange}
            placeholder="Type your name..."
          />
          <button
            className={styles.barlowBtn}
            type="submit"
            disabled={userName.length === 0}
          >
            What's my rap name
          </button>
        </form>
        {showName && (
            <p>
            YOUR RAP NAME IS...
            {userName}
            </p>
        )}
        </>
     );
}
 
export default RapNameGenerator;