import {
  CategoryCard,
  subCategoryImg01,
  subCategoryImg02,
  subCategoryImg03,
} from "..";

const CategoryListHorizontal = () => {
  return (
    <div className="inline-flex py-4 gap-8">
      <CategoryCard img={subCategoryImg01} num="8">
        ألواح خشبية
      </CategoryCard>
      <CategoryCard img={subCategoryImg02} num="8">
        الغراء والترويبة
      </CategoryCard>
      <CategoryCard img={subCategoryImg03} num="8">
        السيليكون واللواصق
      </CategoryCard>
      <CategoryCard img={subCategoryImg01} num="8">
        ألواح خشبية
      </CategoryCard>
      <CategoryCard img={subCategoryImg02} num="8">
        الغراء والترويبة
      </CategoryCard>
      <CategoryCard img={subCategoryImg03} num="8">
        السيليكون واللواصق
      </CategoryCard>
    </div>
  );
};

export default CategoryListHorizontal;
