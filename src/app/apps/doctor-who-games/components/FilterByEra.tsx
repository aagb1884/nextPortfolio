interface FilterProps {
    handleFilterEra: (filterTerm: string, filterFunction: Function) => void;
    setFilterEra: (filter: string) => void;
    filterEra: string;
  
  }

import styles from "../../../styles/drwho.module.css";

const FilterEra: React.FC<FilterProps> = ({filterEra, setFilterEra, handleFilterEra}) => {

    return (
        <div>
        <select
        
        value={filterEra}
        onChange={(e) => {
        handleFilterEra(e.target.value, setFilterEra);
        }}
    className={styles.customSelect}
    aria-label="Filter Stories by Era">`
    <option value='All'>Filter By Era</option>
    <option value='1963 - 1996'>1963 - 1996 ("Classic")</option>
    <option value='2005 - Present Day'>2005 - Present Day ("New Who")</option>
    </select>
    <span className="focus"></span>
</div>
);
}
    
    export default FilterEra;