import styles from "@/app/styles/sciFiName.module.css";

interface InstructionsModalProps {
  setShowInstructions: (value: boolean) => void;
  showInstructions: boolean;
}

const InstructionsModal: React.FC<InstructionsModalProps> = ({
  showInstructions,
  setShowInstructions,
}) => {
  return (
    <div
      onClick={() => {
        setShowInstructions(!showInstructions);
      }}
      className={styles.modalWrapper}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <section className={styles.modalText}>
          <h1>How this works</h1>
          <p>Use this to name characters in Science Fiction stories.</p>
          <p>
            <b>
              Names are generated randomly from a selection of syllables, it is
              up to the author to consider issues of sensitivity and copyright.
            </b>
          </p>
          <p>
            Set the number of syllables you want in your name (the maximum
            allowed is fifteen [15]).
          </p>
          <p>Click on &quot;GET SCI FI NAME&quot;.</p>
          <p>You can use the filters to add spaces and hyphens.</p>
          <p>
            The Chibnall filter will only give you names containing the letter
            &quot;K&quot;.
          </p>
        </section>
        <button
          className={styles.hideModalBtn}
          onClick={() => {
            setShowInstructions(!showInstructions);
          }}
        >
          Hide Instructions
        </button>
      </div>
    </div>
  );
};

export default InstructionsModal;
