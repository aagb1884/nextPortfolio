import styles from "@/app/styles/randomiser.module.css";
import { Story } from "../../light/data/stories";

interface scannerProps {
  story: Story | undefined;
  missing: boolean | undefined;
  animated: boolean | undefined;
  helmic: boolean;
}

const Scanner: React.FC<scannerProps> = ({
  story,
  missing,
  animated,
  helmic,
}) => {
  return (
    <div className={styles.scanner}>
      {helmic && (
        <p className={styles.storyTitle}>
          STOP DOING THAT TO THE HELMIC REGULATOR
        </p>
      )}
      {story && !helmic && (
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
      {!story && !helmic && <p>Awaiting instructions...</p>}
    </div>
  );
};

export default Scanner;
