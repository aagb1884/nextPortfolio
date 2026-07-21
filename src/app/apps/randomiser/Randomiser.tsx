"use client";
import Image from "next/image";
import styles from "../../styles/randomiser.module.css";
import AppsFooter from "../components/AppsFooter";
import StartModal from "./components/modal";
import FilterModal from "./components/filterModal";
import Scanner from "./components/Scanner";
import tardisBackground from "../../../../public/images/randomiser/tardis_background.png";
import { useEffect, useState, useMemo } from "react";
import { Story, stories } from "../light/data/stories";
import Console from "./components/Console";

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
  const [mute, setMute] = useState<boolean>(false);

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
      humAudio.loop = true;
      humAudio.play();
    }
  }

  useEffect(() => {
    if (humAudio && landingAudio && mute) {
      humAudio.muted = true;
      landingAudio.muted = true;
    } else if (humAudio && landingAudio && !mute) {
      humAudio.muted = false;
      landingAudio.muted = false;
    }
  }, [mute]);

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
      <Console
        story={story}
        active={active}
        setActive={setActive}
        lightArray={lightArray}
        setFilterModal={setFilterModal}
        playLanding={playLanding}
        mute={mute}
        setMute={setMute}
      />
      <Scanner story={story} missing={missing} animated={animated} />
    </div>
  );
}

export default Randomiser;
