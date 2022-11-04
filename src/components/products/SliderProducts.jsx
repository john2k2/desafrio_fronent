import { useState } from "react";

import imagen1 from "@/assets/images/image-product-1.jpg";
import imagen2 from "@/assets/images/image-product-2.jpg";
import imagen3 from "@/assets/images/image-product-3.jpg";
import imagen4 from "@/assets/images/image-product-4.jpg";

//icons
import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";

const imagenes = [imagen1, imagen2, imagen3, imagen4];

const SliderProducts = () => {
  const [imagen, setImagen] = useState(0);

  const nextImg = () => {
    imagen === imagenes.length - 1 ? setImagen(0) : setImagen(imagen + 1);
  };

  const prevImg = () => {
    imagen === 0 ? setImagen(imagenes.length - 1) : setImagen(imagen - 1);
  };

  return (
    <section className="relative grid gap-4 md:grid-cols-4">
      <div className="col-span-4 ">
        <img src={imagenes[imagen]} alt="imagen1" className="aspect-[16-12]" />
        <div>
          <div className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4 ">
            <button
              onClick={prevImg}
              className="grid h-10 w-10 place-items-center rounded-full bg-white "
            >
              <PrevIcon />
            </button>
            <button
              onClick={nextImg}
              className=" grid h-10 w-10 place-items-center rounded-full bg-white"
            >
              <NextIcon />
            </button>
          </div>
        </div>
      </div>
      <img src={imagen1} alt="" className=" hidden md:block" />
      <img src={imagen2} alt="" className=" hidden md:block" />
      <img src={imagen3} alt="" className=" hidden md:block" />
      <img src={imagen4} alt="" className=" hidden md:block" />
    </section>
  );
};

export default SliderProducts;
