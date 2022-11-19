import CartIcon from "@/components/icons/CartIcon";

const DetailProducts = () => {
  return (
    <section className="md:max-h-max(100%) container mx-auto px-4  md:px-0 ">
      <p className="text-s mb-3 font-bold uppercase tracking-wide text-Orange ">
        Sneaker Company
      </p>
      <h2 className="mb-3 text-3xl font-bold md:text-3xl ">
        Fall Limited Edition Sneakers
      </h2>
      <p className="text-1xl mb-8 text-Dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they ll withstand everything the
        weather can offer.
      </p>
      <div className="mb-8 grid grid-cols-3 items-center font-bold md:grid-cols-[0fr_3fr]">
        <span className="text-2xl">$125.00</span>
        <span className="mx-5 mr-auto rounded-md bg-Pale-orange py-1 px-2 text-Orange">
          50%
        </span>
        <span className="text-right text-xl text-Grayish-blue line-through md:text-start ">
          $250.00
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3 font-bold md:gap-8">
        <div className="col-span-3 flex items-baseline justify-between rounded-md bg-slate-100 py-2 px-5 md:col-span-1 ">
          <button className="text-3xl text-Orange">-</button>
          <span className="text-xl">0</span>
          <button className="text-3xl text-Orange">+</button>
        </div>
        <button className="col-span-3 flex justify-center gap-x-3  rounded-md bg-Orange py-3 text-white transition-all hover:bg-orange-300 md:col-span-2">
          <CartIcon className="fill-white" />
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default DetailProducts;
