import styles from '../../blog.module.css'

const CategorySelect = ({handleCategoryFilter, allCategories, allPostsData}) => {

const postCategories = allPostsData
? allPostsData
    .map((post) => post.categories.map((category) => category.title))  
    .flat() 
: [];

 const handleChange = (event) => {

 const selectedCategoryName = event.target.value;

 const selectedCategory = postCategories.includes(selectedCategoryName) || 
 selectedCategoryName === 'All'
 ? selectedCategoryName 
 : null; 

handleCategoryFilter(selectedCategory);  
};

    return ( 
    <div className={styles.blogCategoryFilter}>
    {allCategories &&
    <label>
    <select onChange={handleChange}>
        <option value='All'>Filter by Category</option>
        {allCategories.map((category) => (
          <option key={category.title} value={category.title}>
            {category.title}
          </option>
           ))}
    </select>
    </label>
    }
     </div>
     );
}
 
export default CategorySelect;