import DetailProducts from "@/components/products/DetailProducts";
import SliderProducts from "@/components/products/SliderProducts";

const MainProducts = () => {
  return (
    <main className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
      <SliderProducts />
      <DetailProducts />
    </main>
  );
};

export default MainProducts;
