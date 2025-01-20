interface FilterProps {
    handleFilter: (filterTerm: string) => void;
    setFilter: (filter: string) => void;
    filter: string;
  }

import styles from "../../../styles/drwho.module.css";

const Filter: React.FC<FilterProps> = ({filter, setFilter, handleFilter
}) => {

    return (
        <div>
        <select
       
        value={filter}
        onChange={(e) => {
        handleFilter(e.target.value);
        }}
    className={styles.customSelect}
    aria-label="Filter Stories by Doctor">`
    <option value='All'>Filter By Doctor</option>
    <option value='First' >First Doctor (William Hartnell)</option>
    <option value='Second' >Second Doctor (Patrick Troughton)</option>
    <option value='Third' >Third Doctor (Jon Pertwee)</option>
    <option value='Fourth' >Fourth Doctor (Tom Baker)</option>
    <option value='Fifth' >Fifth Doctor (Peter Davison)</option>
    <option value='Sixth' >Sixth Doctor (Colin Baker)</option>
    <option value='Seventh' >Seventh Doctor (Sylvester McCoy)</option>
    <option value='Eighth' disabled={true}>Eighth Doctor (Paul McGann)</option>
    <option value='Ninth' >Ninth Doctor (Christopher Eccleston)</option>
    <option value='Tenth' >Tenth Doctor (David Tennant)</option>
    <option value='Eleventh' >Eleventh Doctor (Matt Smith)</option>
    <option value='Twelfth' >Twelfth Doctor (Peter Capaldi)</option>
    <option value='Thirteenth' >Thirteenth Doctor (Jodie Whittaker)</option>
    <option value='Fourteenth' disabled={true}>Fourteenth Doctor (David Tennant)</option>
    <option value='Fifteenth' >Fifteenth Doctor (Ncuti Gatwa)</option>
    </select>
    <span className="focus"></span>
</div>
);
}
    
    export default Filter;