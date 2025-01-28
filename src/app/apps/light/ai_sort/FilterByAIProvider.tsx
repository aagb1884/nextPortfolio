interface FilterProps {
    handleFilterAIProvider: (filterTerm: string) => void;
    filterAIProvider: string;
  }

import styles from "../../../styles/drwho.module.css";

const FilterAIProvider: React.FC<FilterProps> = ({filterAIProvider, handleFilterAIProvider}) => {

    return (
        <div>
        <select
        value={filterAIProvider}
        onChange={(e) => {
        handleFilterAIProvider(e.target.value);
        }}
    className={styles.customSelect}
    aria-label="Filter Stories by AI Provider">`
    <option value="All">Filter by AI</option>
    <option value="Audience Research Dept. (1963 - 1981)">Audience Research Dept. (1963 - 1981)</option>
    <option value="B.A.R.B. (1981  - 2012)">B.A.R.B. (1981  - 2012)</option>
    <option value="GfK (2013 - Present Day)">GfK (2013 - Present Day)</option>
    </select>
    <span className="focus"></span>
</div>
);
}
    
    export default FilterAIProvider;