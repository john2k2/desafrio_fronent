import DetailProducts from "@/components/products/col-details/DetailProducts";
import MainImages from "@/components/products/col-images/MainImages";

import imagenChica from "@/assets/images/image-product-1-thumbnail.jpg";
import imagenChica2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imagenChica3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imagenChica4 from "@/assets/images/image-product-4-thumbnail.jpg";

import imagen1 from "@/assets/images/image-product-1.jpg";
import imagen2 from "@/assets/images/image-product-2.jpg";
import imagen3 from "@/assets/images/image-product-3.jpg";
import imagen4 from "@/assets/images/image-product-4.jpg";

const imagenes = [imagen1, imagen2, imagen3, imagen4];

const imagenSmall = [imagenChica, imagenChica2, imagenChica3, imagenChica4];

const objectProduct = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  price: 125,
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  subtitle: "Sneaker Company",
  discount: 0.5,
  oldPrice: 250,
  image: imagen1,
  imageSmall: imagenChica,
};

const MainProducts = () => {
  return (
    <main className="grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2 ">
      <MainImages imagenSmall={imagenSmall} imagenes={imagenes} />
      <DetailProducts />
    </main>
  );
};

export default MainProducts;
