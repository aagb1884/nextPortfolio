import styles from "@/app/styles/randomiser.module.css";
import Image from "next/image";
import { Story } from "../../light/data/stories";
import muteBtn from "../../../../../public/images/icons8-mute-50.png";
import voiceBtn from "../../../../../public/images/icons8-voice-50.png";

interface consoleProps {
  story: Story | undefined;
  active: boolean | undefined;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  lightArray: string[];
  setFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  playLanding: () => void;
  mute: boolean;
  setMute: React.Dispatch<React.SetStateAction<boolean>>;
}

const Console: React.FC<consoleProps> = ({
  story,
  active,
  setActive,
  lightArray,
  setFilterModal,
  playLanding,
  mute,
  setMute,
}) => {
  return (
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
              <button
                name="Mute/Unmute"
                className={styles.muteBtn}
                onClick={() => {
                  setMute((prev) => !prev);
                }}
              >
                <Image
                  src={mute ? voiceBtn : muteBtn}
                  alt={mute ? "Mute Button" : "Unmute Button"}
                  width={10}
                  height={10}
                  color="transparent"
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.consoleRight} />
      </div>
    </div>
  );
};

export default Console;
