import styles from "@/app/styles/randomiser.module.css";
import { Story } from "../../../light/data/stories";
import Rotor from "./Rotor";
import Controls from "./Controls";

interface consoleProps {
  story: Story | undefined;
  active: boolean | undefined;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  lightArray: string[];
  setFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  playLanding: () => void;
  mute: boolean;
  setMute: React.Dispatch<React.SetStateAction<boolean>>;
  setHelmic: (b: boolean) => void;
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
  setHelmic,
}) => {
  return (
    <div className={styles.controls}>
      <Rotor active={active} />
      <Controls
        story={story}
        active={active}
        setActive={setActive}
        lightArray={lightArray}
        setFilterModal={setFilterModal}
        playLanding={playLanding}
        mute={mute}
        setMute={setMute}
        setHelmic={setHelmic}
      />
    </div>
  );
};

export default Console;
