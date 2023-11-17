import "./category-directory.style.scss";
import CategoryItem from "../category-item/category-item.component";

const CategoryDirectory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryDirectory;
