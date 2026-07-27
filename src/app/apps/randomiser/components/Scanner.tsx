import styles from "@/app/styles/randomiser.module.css";
import { Story } from "../../light/data/stories";

interface scannerProps {
  story: Story | undefined;
  missing: boolean | undefined;
  animated: boolean | undefined;
  helmic: boolean;
  telepath: boolean;
  searchLink: boolean;
  searchTerm: string | undefined;
  setSearchLink: (b: boolean) => void;
}

const Scanner: React.FC<scannerProps> = ({
  story,
  missing,
  animated,
  helmic,
  telepath,
  searchLink,
  searchTerm,
  setSearchLink,
}) => {
  const search = () => {
    window.open(`https://www.ecosia.org/search?q=${searchTerm}`, "_blank");
    setSearchLink(false);
  };
  return (
    <div className={styles.scanner}>
      {helmic && (
        <p className={styles.storyTitle}>
          STOP DOING THAT TO THE HELMIC REGULATOR
        </p>
      )}
      {telepath && (
        <p className={styles.storyTitle}>ACTIVATING TELEPATHIC CIRCUITS...</p>
      )}
      {searchLink && searchTerm && (
        <div>
          <p>&quot;{searchTerm}&quot;</p>
          <p>Do you want to search for this?</p>
          <p
            className={styles.yes}
            onClick={() => {
              search();
            }}
          >
            Yes
          </p>
          <p
            className={styles.no}
            onClick={() => {
              setSearchLink(false);
            }}
          >
            No
          </p>
        </div>
      )}
      {story && !helmic && !telepath && !searchLink && (
        <div>
          <p className={styles.storyTitle}>{story?.name}</p>
          <ul className={styles.storyInfo}>
            <li>{`A ${story?.doctor[0]} Doctor story.`}</li>
            <li>{story?.series}</li>
            <li>{story?.length}</li>
            {missing && !animated && (
              <li>
                This story has missing episodes. Look for audio or reconstructed
                versions.
              </li>
            )}
            {animated && <li>This story has missing episodes animated.</li>}
            {story.extra && <li>{story.extra}</li>}
          </ul>
        </div>
      )}
      {!story && !helmic && !telepath && !searchLink && (
        <p>Awaiting instructions...</p>
      )}
    </div>
  );
};

export default Scanner;
