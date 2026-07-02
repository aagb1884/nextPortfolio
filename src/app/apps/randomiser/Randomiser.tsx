"use client";
import Image from "next/image";
import styles from "../../styles/randomiser.module.css";
import AppsFooter from "../components/AppsFooter";
import tardisBackground from "../../../../public/images/randomiser/tardis_background.png";
import { useEffect, useState } from "react";
import { Story, stories } from "../light/data/stories";

function Randomiser() {
  const [active, setActive] = useState<boolean>(false);
  const [story, setStory] = useState<Story>();
  const [landingAudio] = useState(
    typeof window !== "undefined"
      ? new Audio("/audio/randomiser/arrive.wav")
      : null
  );

  function playLanding() {
    if (landingAudio) {
      landingAudio.volume = 0.2;
      landingAudio.play();
    }
  }

  const [humAudio] = useState(
    typeof window !== "undefined"
      ? new Audio("/audio/randomiser/hum.wav")
      : null
  );

  function playHum() {
    if (humAudio) {
      humAudio.volume = 0.1;
      humAudio.loop;
      humAudio.play();
    }
  }

  const filteredStories = [...stories].filter(
    (story) => story.multipart !== true
  );

  function getRandomStory() {
    const randomStory = [...filteredStories]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .slice(0, 1);
    setStory(randomStory[0]);
  }

  useEffect(() => {
    if (active) {
      getRandomStory();
    }
  }, [active]);

  console.log("story", story);
  const missing = story?.tags?.includes("missing");
  const animated = story?.tags?.includes("animated");

  return (
    <div className={styles.randomiser}>
      <AppsFooter />
      <Image
        className={styles.bg}
        src={tardisBackground}
        alt="TARDIS Background"
      />
      <div className={styles.controls}>
        <div className={`${styles.rotor} ${active ? styles.active : ""}`}>
          <span className={styles.glowRtr} />
          <span className={styles.glowRtr} />
        </div>
        <div className={styles.consoleUnit}>
          <div className={styles.consoleLeft} />
          <div className={styles.console}>
            <div className={styles.randomiserBox}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
            <span className={styles.panel} />
            <div className={styles.consoleLayout}>
              <div className={styles.lPanel}>
                <div className={styles.consoleScreen}>
                  {story?.image && (
                    <Image
                      src={story?.image}
                      alt={`${story.doctor} Doctor image`}
                      width={40}
                      height={60}
                    />
                  )}
                </div>
              </div>
              <div className={styles.randomiserToggle}>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={active}
                    disabled={active}
                    onChange={() => {
                      setActive((prev) => !prev);
                      playLanding();
                      setTimeout(() => {
                        setActive(false);
                      }, 1000);
                    }}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.rPanel}>
                <div className={styles.speaker} />
              </div>
            </div>
          </div>
          <div className={styles.consoleRight} />
        </div>
      </div>

      <div className={styles.scanner}>
        {story ? (
          <div>
            <p className={styles.storyTitle}>{story?.name}</p>
            <ul className={styles.storyInfo}>
              <li>{`A ${story?.doctor} Doctor story.`}</li>
              <li>{story?.series}</li>
              <li>{story?.length}</li>
              {missing && !animated && (
                <li>
                  This story has missing episodes. Look for audio or
                  reconstructed versions.
                </li>
              )}
              {animated && <li>This story has missing episodes animated.</li>}
            </ul>
          </div>
        ) : (
          <p>Awaiting instructions...</p>
        )}
      </div>
    </div>
  );
}

export default Randomiser;
