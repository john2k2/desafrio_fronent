import smalImg from "@/assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "@/components/icons/DeleteIcon";

import { useContext } from "react";
import { useCartDetail } from "@/components/context/useCartDetail";

const CardDetailsHeader = () => {
  const { cartProducts, removeProducts } = useContext(useCartDetail);

  return (
    <section className="absolute top-[125%] left-0 z-10 w-full md:left-2/3 md:top-[105%] md:max-w-md md:rounded-md ">
      <div className="mx-4 rounded-md bg-white">
        <h4 className="px-6 py-6 text-lg font-bold">Cart</h4>
        <hr />
        {cartProducts.length === 0 && (
          <p className="py-10 text-center">Your cart is empty</p>
        )}
        {cartProducts.map((product) => (
          <article
            key={product.id}
            className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6
              px-6 py-6"
          >
            <img className="rounded-md" src={product.img} alt="" />
            <div className="">
              <h6>{product.name} </h6>
              <p>
                <span>
                  ${product.discountPrice} x {product.quantity}{" "}
                </span>{" "}
                <span className="font-bold">
                  {" "}
                  ${(product.discountPrice * product.quantity).toFixed(2)}{" "}
                </span>
              </p>
            </div>
            <button onClick={() => removeProducts(product.id)}>
              <DeleteIcon className="ml-auto hover:fill-Orange" />
            </button>
          </article>
        ))}
        <div>
          {cartProducts.length !== 0 && (
            <div className="px-6 pb-3 shadow-lg">
              <button className=" w-full rounded-md bg-Orange py-4 text-white transition-all hover:bg-orange-700">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CardDetailsHeader;
