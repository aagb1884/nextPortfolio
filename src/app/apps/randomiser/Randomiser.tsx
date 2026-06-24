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

  let filteredStories = [...stories].filter(
    (story) => story.multipart !== true
  );
  // if (filter !== "All" || filterEra !== "All") {
  //   filteredStories = stories.filter((story) => {
  //     const doctorMatch = story.doctor === filter || filter === "All";
  //     const eraMatch = story.era === filterEra || filterEra === "All";

  //     return doctorMatch && eraMatch;
  //   });
  // }

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

  return (
    <div className={styles.randomiser}>
      <AppsFooter />
      <Image
        className={styles.bg}
        src={tardisBackground}
        alt="TARDIS Background"
      />
      <div className={styles.controls}>
        <div className={styles.rotor}>
          <span className={styles.glowRtr} />
          <span className={styles.glowRtr} />
        </div>
        <div className={styles.console}>
          <div className={styles.randomiserBox}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
          <div className={styles.randomiserToggle}>
            <label className={styles.toggle}>
              <input
                type="checkbox"
                checked={active}
                onChange={() => {
                  setActive(!active);
                }}
              />
              <span className={styles.slider}></span>
            </label>
          </div>
        </div>
      </div>

      <div className={styles.scanner}>
        <p>{story?.name}</p>
        <p>{`A ${story?.doctor} Doctor story.`}</p>
      </div>
    </div>
  );
}

export default Randomiser;
