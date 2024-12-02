import CategoryList from "@/components/CatogoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";


export default function Home() {
  return (
    <div>
    <Slider />
    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2cl:px-64">
      <h1>Featured Products</h1>
      <ProductList />
    </div>
    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2cl:px-64">
    <h1>Categories</h1>
    <CategoryList />
    </div>
    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2cl:px-64">
    <h1>New Products</h1>
    <ProductList />
    </div>

    </div>
  );
}
