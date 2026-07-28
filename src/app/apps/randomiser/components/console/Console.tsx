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
  helmic: boolean;
  setHelmic: (b: boolean) => void;
  telepath: boolean;
  setTelepath: (b: boolean) => void;
  searchLink: boolean;
  setSearchLink: (b: boolean) => void;
  setSearchTerm: (b: string) => void;
  helmicTally: number;
  setHelmicTally: React.Dispatch<React.SetStateAction<number>>;
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
  helmic,
  setHelmic,
  telepath,
  setTelepath,
  searchLink,
  setSearchLink,
  setSearchTerm,
  helmicTally,
  setHelmicTally,
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
        helmic={helmic}
        setHelmic={setHelmic}
        telepath={telepath}
        setTelepath={setTelepath}
        searchLink={searchLink}
        setSearchLink={setSearchLink}
        setSearchTerm={setSearchTerm}
        helmicTally={helmicTally}
        setHelmicTally={setHelmicTally}
      />
    </div>
  );
};

export default Console;
