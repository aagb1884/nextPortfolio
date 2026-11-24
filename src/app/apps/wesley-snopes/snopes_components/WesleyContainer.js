"use client";
import styles from "@/app/styles/wesley.module.css";
import Modal from "../snopes_components/modal";
import { useState } from "react";
import { useGlobalState } from "@/app/context/GlobalStateContext";
import Image from "next/image";
import { imgsrcs } from "@/data/wesleySnopes";

const WesleyContainer = () => {
  const { showModal, setShowModal } = useGlobalState();

  const [image, setImage] = useState("");
  const [userQuery, setUserQuery] = useState("");
  const [prevUserQuery, setPrevUserQuery] = useState("pqsdfgdf");
  const [warning, setWarning] = useState("");

  function get_random_response() {
    if (userQuery.length > 0 && prevUserQuery !== userQuery) {
      setImage(imgsrcs[Math.floor(Math.random() * imgsrcs.length)]);
      setPrevUserQuery(userQuery);
      setWarning("");
    } else {
      setWarning(`YOU ALREADY HAVE YOUR TRUTH. ENTER A DIFFERENT QUERY`);
    }
  }

  function handleInputChange(event) {
    setUserQuery(event.target.value);
  }

  function handleClear() {
    setUserQuery("");
    setImage("");
    setPrevUserQuery("pqsdfgdf");
  }

  return (
    <main className={styles.mainWesley}>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
      <div className={styles.input}>
        <form className={styles.form}>
          <label htmlFor="user-query">
            <h2 className={styles.iHeard}>Hey Wesley, I heard...</h2>
          </label>
          <div className={styles.interfaceLayout}>
            <textarea
              type="text"
              data-testid="text-input"
              className={styles.userQuery}
              id="user-query"
              name="user-query"
              maxLength="1000"
              onChange={handleInputChange}
            ></textarea>
            <button
              onClick={handleClear}
              className={styles.clearButton}
              data-testid="clear-text-button"
              title="Clear All Text and Images"
            >
              Clear
            </button>
          </div>
        </form>

        <button
          onClick={get_random_response}
          disabled={userQuery.length === 0}
          data-testid="get-truth"
          className={`${styles.truth} ${userQuery.length === 0 ? styles.truthDisabled : ""}`}
          title="Click here to find out THE TRUTH"
        >
          IS THAT TRUE?
        </button>
      </div>
      <div className={styles.output}>
        <section className={styles.wesleyImageSection}>
          <p>{warning}</p>
          {image && (
            <>
              <Image
                className={styles.wesleyImage}
                src={image.image}
                alt={image.caption}
                width={325}
                height={400}
                loading={image === imgsrcs[0] ? "eager" : "lazy"}
                placeholder="blur"
                blurDataURL="/images/wesleySnopes/pish.png"
              />
              <p>{image.caption} </p>
            </>
          )}
        </section>
      </div>
    </main>
  );
};

export default WesleyContainer;
