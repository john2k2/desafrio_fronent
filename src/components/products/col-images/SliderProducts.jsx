import { useState, useEffect } from "react";
import { useRef } from "react";

//icons
import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";

const SliderProducts = ({
  imagenes = [],
  imagenSmall = [],
  isOpenModal = false,
  closeModal = null,
  openModal = () => {},
  ...props
}) => {
  const btnSlider = useRef(null);
  const [imagen, setImagen] = useState(0);

  useEffect(() => {
    isOpenModal && btnSlider.current.classList.remove("md:hidden");
  }, [isOpenModal]);

  const nextImg = () => {
    if (imagen === imagenes.length - 1) {
      setImagen(0);
    } else {
      setImagen(imagen + 1);
    }
  };

  const prevImg = () => {
    if (imagen === 0) {
      setImagen(imagenes.length - 1);
    } else {
      setImagen(imagen - 1);
    }
  };

  return (
    <section {...props}>
      {isOpenModal && (
        <button onClick={closeModal} className="text-right md:col-span-4">
          Cerrar
        </button>
      )}

      <div className="relative col-span-4 ">
        <img
          className=" aspect-[12/10] w-full md:aspect-[16/16] md:cursor-pointer md:rounded-md "
          src={imagenes[imagen]}
          alt="imagen"
          onClick={openModal}
        />
        <div
          ref={btnSlider}
          className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4 md:hidden "
        >
          <button
            onClick={prevImg}
            className="grid h-10 w-10 place-items-center rounded-full bg-white  "
          >
            <PrevIcon />
          </button>
          <button
            onClick={nextImg}
            className=" grid h-10 w-10 place-items-center rounded-full bg-white "
          >
            <NextIcon />
          </button>
        </div>
      </div>
      {imagenSmall.map((imagenSmall, i) => (
        <div
          key={i}
          onClick={() => {
            setImagen(i);
          }}
          className=" relative cursor-pointer overflow-hidden rounded-md"
        >
          <img
            src={imagenSmall}
            alt=""
            className="hidden md:block md:rounded-md"
          />

          <span
            className={`absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)]
            ${imagen === i && "bg-[rgba(255,255,255,0.5)]"}`}
          ></span>
        </div>
      ))}
    </section>
  );
};

export default SliderProducts;
