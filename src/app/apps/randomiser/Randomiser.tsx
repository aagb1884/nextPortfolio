"use client";
import Image from "next/image";
import styles from "../../styles/randomiser.module.css";
import AppsFooter from "../components/AppsFooter";
import StartModal from "./modal";
import tardisBackground from "../../../../public/images/randomiser/tardis_background.png";
import { useEffect, useState, useMemo } from "react";
import { Story, stories } from "../light/data/stories";
import FilterModal from "./filterModal";

function Randomiser() {
  const [active, setActive] = useState<boolean>(false);
  const [startModal, setStartModal] = useState<boolean>(true);
  const [filterModal, setFilterModal] = useState<boolean>(false);
  const [storyList, setStoryList] = useState<Story[]>(stories);
  const [filterDoctors, setFilterDoctors] = useState<string[]>([]);
  const [filterEras, setFilterEras] = useState<string[]>([]);
  const [filterTerm, setFilterTerm] = useState<string>("");

  const [story, setStory] = useState<Story>();
  const [lightArray, setLightArray] = useState<string[]>([
    "yellow",
    "red",
    "blue",
    "green",
  ]);

  // filtering

  function getRandomStory() {
    const randomStory = [...storyList]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .slice(0, 1);
    setStory(randomStory[0]);
  }
  const filteredStories = useMemo(() => {
    let result = [...stories].filter((story) => story.multipart !== true);
    if (
      filterTerm.length > 0 ||
      filterDoctors.length !== 0 ||
      filterEras.length !== 0
    ) {
      result = result.filter((story) => {
        const eraMatch =
          filterEras.length === 0 || filterEras.includes(story.era);
        const drMatch =
          filterDoctors.length === 0 ||
          story.doctor.some((doctor) => filterDoctors.includes(doctor));
        const filterMatch =
          filterTerm.length === 0 ||
          (story.tags !== undefined &&
            story.tags.toLowerCase().includes(filterTerm.toLowerCase()));
        return eraMatch && drMatch && filterMatch;
      });
    }
    return result;
  }, [stories, filterTerm, filterDoctors, filterEras]);

  useEffect(() => {
    setStoryList(filteredStories);
  }, [filteredStories]);

  useEffect(() => {
    if (active) {
      getRandomStory();
    }
  }, [active]);

  const missing = story?.tags?.includes("missing");
  const animated = story?.tags?.includes("animated");

  // audio

  const [landingAudio] = useState(
    typeof window !== "undefined"
      ? new Audio("/audio/randomiser/arrive.wav")
      : null
  );

  function playLanding() {
    if (landingAudio) {
      landingAudio.volume = 0.5;
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
      humAudio.loop = true;
      humAudio.play();
    }
  }

  // lights

  useEffect(() => {
    const interval = setInterval(() => {
      setLightArray((prev) => [...prev.slice(1), prev[0]]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.randomiser}>
      <div style={{ zIndex: 50 }}>
        <AppsFooter />
      </div>
      <Image
        className={styles.bg}
        src={tardisBackground}
        alt="TARDIS Background"
      />
      {/* modals */}
      {startModal && (
        <StartModal setStartModal={setStartModal} playHum={playHum} />
      )}
      {filterModal && (
        <FilterModal
          setFilterModal={setFilterModal}
          filterTerm={filterTerm}
          setFilterTerm={setFilterTerm}
          filterDoctors={filterDoctors}
          setFilterDoctors={setFilterDoctors}
          filterEras={filterEras}
          setFilterEras={setFilterEras}
        />
      )}
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
            <button
              className={styles.filterBtn}
              onClick={() => {
                setFilterModal((prev) => !prev);
              }}
            >
              FILTERS
            </button>
            <div className={styles.panel}>
              <span
                className={styles.dot2}
                style={{
                  backgroundColor: `radial-gradient(circle at 1px 20px, #fff, ${lightArray[0]})`,
                  boxShadow: `0px 0px 105px 15px ${lightArray[0]}`,
                }}
              />
              <span
                className={styles.dot2}
                style={{
                  backgroundColor: `radial-gradient(circle at 1px 20px, #fff, ${lightArray[1]})`,
                  boxShadow: `0px 0px 105px 15px ${lightArray[1]}`,
                }}
              />
              <span
                className={styles.dot2}
                style={{
                  backgroundColor: `radial-gradient(circle at 1px 20px, #fff, ${lightArray[2]})`,
                  boxShadow: `0px 0px 105px 15px ${lightArray[2]}`,
                }}
              />
              <span
                className={styles.dot2}
                style={{
                  backgroundColor: `radial-gradient(circle at 1px 20px, #fff, ${lightArray[3]})`,
                  boxShadow: `0px 0px 105px 15px ${lightArray[3]}`,
                }}
              />
            </div>
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
              <li>{`A ${story?.doctor[0]} Doctor story.`}</li>
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
