import CartIcon from "@/components/icons/CartIcon";

import { useState } from "react";
import { useContext } from "react";
import { useCartDetail } from "@/components/context/useCartDetail";

const DetailProducts = ({ objectProduct }) => {
  const { cartProducts, addProducts } = useContext(useCartDetail);
  const [quantity, setQuantity] = useState(1);

  const incremenet = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addCart = () => {
    addProducts({
      img: objectProduct.imagenSmal[0],
      id: objectProduct.id,
      name: objectProduct.name,
      discountPrice:
        (objectProduct.price * (100 - objectProduct.discount)) / 100,
      quantity,
    });
    setQuantity(1);
  };

  return (
    <section className="md:max-h-max(100%) container mx-auto px-4  md:px-0 ">
      <p className="text-s mb-3 font-bold uppercase tracking-wide text-Orange ">
        {objectProduct.subtitle}
      </p>
      <h2 className="mb-3 text-3xl font-bold md:text-3xl ">
        {objectProduct.name}
      </h2>
      <p className="text-1xl mb-8 text-Dark-grayish-blue">
        {objectProduct.description}
      </p>
      <div className="mb-8 grid grid-cols-3 items-center font-bold md:grid-cols-[0fr_3fr]">
        <span className="text-2xl">
          ${(objectProduct.oldPrice * (1 - objectProduct.discount)).toFixed(2)}
        </span>
        <span className="mx-5 mr-auto rounded-md bg-Pale-orange py-1 px-2 text-Orange">
          {objectProduct.discount * 100}%
        </span>
        <span className="text-right text-xl text-Grayish-blue line-through md:text-start ">
          ${objectProduct.oldPrice.toFixed(2)}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3 font-bold md:gap-8">
        <div className="col-span-3 flex items-baseline justify-between rounded-md bg-gray-200 py-2 px-5 md:col-span-1 ">
          <button onClick={decrement} className="text-3xl text-Orange">
            -
          </button>
          <span className="text-xl">{quantity} </span>
          <button onClick={incremenet} className="text-3xl text-Orange">
            +
          </button>
        </div>
        <button
          onClick={addCart}
          className="col-span-3 flex justify-center gap-x-3  rounded-md bg-Orange py-3 text-white transition-all hover:bg-orange-300 md:col-span-2 "
        >
          <CartIcon className="fill-white" />
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default DetailProducts;
