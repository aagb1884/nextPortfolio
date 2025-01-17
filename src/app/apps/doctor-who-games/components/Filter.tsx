import { Story } from "../data/stories";

function Filter({stories, filter, handleFilter}) {

    // const handleChange = (event) => {
    //     const selectedFilter = event.target.value;
    //     const selectedDoctor = stories.find((story: Story) => story.doctor === selectedFilter)
    //     handleFilter(selectedDoctor);
    // };

    return (
        <div>
        <select
        value={filter}
        onChange={(e) => {
        handleFilter(e.target.value);
        }}
    className="custom-select"
    aria-label="Filter Stories by Doctor">`
    <option value='All'>Filter By Doctor</option>
    <option value='First'>First Doctor (William Hartnell)</option>
    <option value='Second'>Second Doctor (Patrick Troughton)</option>
    <option value='Third'>Third Doctor (Jon Pertwee)</option>
    <option value='Fourth'>Fourth Doctor (Tom Baker)</option>
    <option value='Fifth'>Fifth Doctor (Peter Davison)</option>
    <option value='Sixth'>Sixth Doctor (Colin Baker)</option>
    <option value='Seventh'>Seventh Doctor (Sylvester McCoy)</option>
    <option value='Eighth' disabled={true}>Eighth Doctor (Paul McGann)</option>
    <option value='Ninth'>Ninth Doctor (Christopher Eccleston)</option>
    <option value='Tenth'>Tenth Doctor (David Tennant)</option>
    <option value='Eleventh'>Eleventh Doctor (Matt Smith)</option>
    <option value='Twelfth'>Twelfth Doctor (Peter Capaldi)</option>
    <option value='Thirteenth'>Thirteenth Doctor (Jodie Whittaker)</option>
    <option value='Fourteenth' disabled={true}>Fourteenth Doctor (David Tennant)</option>
    <option value='Fifteenth'>Fifteenth Doctor (Ncuti Gatwa)</option>
    </select>
    <span className="focus"></span>
</div>
);
}
    
    export default Filter;