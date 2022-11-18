import CartIcon from "@/components/icons/CartIcon";

const DetailProducts = () => {
  return (
    <section className="container mx-auto px-4 md:px-0  md:max-h-max(100%) ">
      <p className="text-s mb-6 font-bold uppercase tracking-wide text-Orange ">
        Sneaker Company
      </p>
      <h2 className="mb-11 text-5xl font-bold ">
        Fall Limited Edition Sneakers
      </h2>
      <p className="mb-8 text-Dark-grayish-blue text-3xl">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they ll withstand everything the
        weather can offer.
      </p>
      <div className="mb-8 grid grid-cols-3 items-center gap- font-bold md:grid-cols-[0fr_3fr] ">
        <span className="text-4xl">$125.00</span>
        <span className="mb-8 mr-auto rounded-md bg-Pale-orange mx-5 py-1 px-2 text-Orange">
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
