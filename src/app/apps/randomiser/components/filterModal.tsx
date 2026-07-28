import styles from "@/app/styles/randomiser.module.css";
import { Story } from "../../light/data/stories";

interface modalProps {
  setFilterModal: (filterTerm: boolean) => void;
  filterTerm: string;
  setFilterTerm: (searchTerm: string) => void;
  filterDoctors: string[];
  setFilterDoctors: (searchTerm: string[]) => void;
  filterEras: string[];
  setFilterEras: (searchTerm: string[]) => void;
  repeats: boolean;
  setRepeats: React.Dispatch<React.SetStateAction<boolean>>;
  setStoryList: (s: Story[]) => void;
  filteredStories: Story[];
}

const FilterModal: React.FC<modalProps> = ({
  setFilterModal,
  filterTerm,
  setFilterTerm,
  filterDoctors,
  setFilterDoctors,
  filterEras,
  setFilterEras,
  repeats,
  setRepeats,
  setStoryList,
  filteredStories,
}) => {
  function clearState() {
    setFilterTerm("");
    setFilterDoctors([]);
    setFilterEras([]);
    setRepeats(true);
    setStoryList(filteredStories);
  }
  return (
    <div className={styles.startModalWrapper}>
      <div className={styles.filterModal}>
        <h1 className={styles.fModalTitle}>SET FILTERS</h1>
        <p className={styles.fModalTxt}>
          Filter the story list to limit possible results.
        </p>
        <p className={styles.fModalTxt}>
          NB. Some filters may result in spoilers.
        </p>
        <div className={styles.filters}>
          <div className={styles.itemSelect}>
            <label htmlFor="doctors">Select Doctor(s):</label>
            <select
              className={styles.multiSelect}
              name="doctors"
              id="doctors"
              multiple
              value={filterDoctors}
              onChange={(e) => {
                const values = Array.from(
                  e.target.selectedOptions,
                  (option) => option.value
                );
                setFilterDoctors(values);
              }}
            >
              <option className={styles.option} value="First">
                First
              </option>
              <option className={styles.option} value="Second">
                Second
              </option>
              <option className={styles.option} value="Third">
                Third
              </option>
              <option className={styles.option} value="Fourth">
                Fourth
              </option>
              <option className={styles.option} value="Fifth">
                Fifth
              </option>
              <option className={styles.option} value="Sixth">
                Sixth
              </option>
              <option className={styles.option} value="Seventh">
                Seventh
              </option>
              <option className={styles.option} value="Eighth">
                Eighth
              </option>
              <option className={styles.option} value="Ninth">
                Ninth
              </option>
              <option className={styles.option} value="Tenth">
                Tenth
              </option>
              <option className={styles.option} value="Eleventh">
                Eleventh
              </option>
              <option className={styles.option} value="Twelfth">
                Twelfth
              </option>
              <option className={styles.option} value="Thirteenth">
                Thirteenth
              </option>
              <option className={styles.option} value="Fourteenth">
                Fourteenth
              </option>
              <option className={styles.option} value="Fifteenth">
                Fifteenth
              </option>
            </select>
          </div>
          <br />
          <div className={styles.itemSelect}>
            <label htmlFor="eras">Select Era(s):</label>
            <select
              className={styles.eraSelect}
              name="eras"
              id="eras"
              multiple={true}
              value={filterEras}
              onChange={(e) => {
                const values = Array.from(
                  e.target.selectedOptions,
                  (option) => option.value
                );
                setFilterEras(values);
              }}
            >
              <option className={styles.option} value="1963 - 1996">
                1963 - 1996
              </option>
              <option className={styles.option} value="2005 - Present Day">
                2005 - Present Day
              </option>
            </select>
          </div>
          <br />
          <div className={styles.itemSelect}>
            <label htmlFor="freetype">Filter by Text:</label>

            <input
              type="text"
              id="freetype"
              name="freetype"
              className={styles.filterInput}
              value={filterTerm}
              onChange={(e) => {
                setFilterTerm(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  setFilterModal(false);
                }
              }}
            />
          </div>
          <div className={styles.filterBtns}>
            <label className={styles.repeats}>
              No Repeats:
              <input
                type="checkbox"
                id="repeats"
                name="repeats"
                checked={!repeats}
                onChange={() => {
                  setRepeats((prev) => !prev);
                }}
              />
            </label>

            <button
              className={styles.clrBtn}
              onClick={() => {
                clearState();
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <button
          className={styles.startBtn}
          onClick={() => {
            setFilterModal(false);
          }}
        >
          Back to console
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
