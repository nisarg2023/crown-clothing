import CategoryItem from "../Categories/CategoriesItem";

import "./Directory.scss";

const Directory = ({ category }) => {
  return (
    <div className="directory-container">
      {category.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
