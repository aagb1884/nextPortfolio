import styles from "@/app/styles/randomiser.module.css";

interface modalProps {
  setFilterModal: (filterTerm: boolean) => void;
  filterTerm: string;
  setFilterTerm: (searchTerm: string) => void;
  filterDoctors: string[];
  setFilterDoctors: (searchTerm: string[]) => void;
  filterEras: string[];
  setFilterEras: (searchTerm: string[]) => void;
}

const FilterModal: React.FC<modalProps> = ({
  setFilterModal,
  filterTerm,
  setFilterTerm,
  filterDoctors,
  setFilterDoctors,
  filterEras,
  setFilterEras,
}) => {
  function clearState() {
    setFilterTerm("");
    setFilterDoctors([]);
    setFilterEras([]);
  }
  return (
    <div className={styles.startModalWrapper}>
      <div className={styles.filterModal}>
        <h1 className={styles.modalTitle}>SET FILTERS</h1>
        <p className={styles.sModalTxt}>
          Filter the story list to limit possible results.
        </p>
        <p className={styles.sModalTxt}>
          NB. Some filters may result in spoilers.
        </p>
        <div className={styles.doctorSelect}>
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
            <option value="First">First</option>
            <option value="Second">Second</option>
            <option value="Third">Third</option>
            <option value="Fourth">Fourth</option>
            <option value="Fifth">Fifth</option>
            <option value="Sixth">Sixth</option>
            <option value="Seventh">Seventh</option>
            <option value="Eighth">Eighth</option>
            <option value="Ninth">Ninth</option>
            <option value="Tenth">Tenth</option>
            <option value="Eleventh">Eleventh</option>
            <option value="Twelfth">Twelfth</option>
            <option value="Thirteenth">Thirteenth</option>
            <option value="Fourteenth">Fourteenth</option>
            <option value="Fifteenth">Fifteenth</option>
          </select>
          <br />
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
            <option value="1963 - 1996">1963 - 1996</option>
            <option value="2005 - Present Day">2005 - Present Day</option>
          </select>
          <br />
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
          />

          <button
            className={styles.clrBtn}
            onClick={() => {
              clearState();
            }}
          >
            Clear Filters
          </button>
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
