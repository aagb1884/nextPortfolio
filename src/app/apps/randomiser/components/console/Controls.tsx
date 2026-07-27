import styles from "@/app/styles/randomiser.module.css";
import Image from "next/image";
import { Story } from "../../../light/data/stories";
import muteBtn from "../../../../../../public/images/icons8-mute-50.png";
import voiceBtn from "../../../../../../public/images/icons8-voice-50.png";
import Right from "./Right";
import Left from "./Left";

interface controlsProps {
  story: Story | undefined;
  active: boolean | undefined;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  lightArray: string[];
  setFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  playLanding: () => void;
  mute: boolean;
  setMute: React.Dispatch<React.SetStateAction<boolean>>;
  setHelmic: (b: boolean) => void;
  setTelepath: (b: boolean) => void;
  setSearchLink: (b: boolean) => void;
  setSearchTerm: (b: string) => void;
}

const Controls: React.FC<controlsProps> = ({
  story,
  active,
  setActive,
  lightArray,
  setFilterModal,
  playLanding,
  mute,
  setMute,
  setHelmic,
  setTelepath,
  setSearchLink,
  setSearchTerm,
}) => {
  return (
    <div className={styles.consoleUnit}>
      <Left setHelmic={setHelmic} />
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
      <Right
        setTelepath={setTelepath}
        setSearchLink={setSearchLink}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
};

export default Controls;
