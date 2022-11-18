import SliderProducts from "@/components/products/col-images/SliderProducts";
import { useState } from "react";

const MainImages = ({ imagenSmall, imagenes }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    if (window.innerWidth > 767) return setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <SliderProducts
        imagenSmall={imagenSmall}
        imagenes={imagenes}
        className="relative grid gap-4 md:grid-cols-4"
        openModal={openModal}
      />
      {isOpenModal && (
        <SliderProducts
          imagenSmall={imagenSmall}
          imagenes={imagenes}
          isOpenModal={isOpenModal}
          className=" bg hidden md:absolute md:top-1/2 md:left-1/2 md:grid md:max-w-2xl md:-translate-x-1/2 md:-translate-y-1/2 md:grid-cols-4 md:gap-4 "
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default MainImages;
