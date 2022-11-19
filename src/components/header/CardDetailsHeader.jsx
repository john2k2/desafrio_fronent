import smalImg from "@/assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "@/components/icons/DeleteIcon";

const CardDetailsHeader = () => {
  return (
    <section className="absolute top-[125%] left-0 z-10 w-full md:left-2/3 md:top-[105%] md:max-w-md md:rounded-md ">
      <div className="mx-4 rounded-md bg-white">
        <h4 className="px-6 py-6 text-lg font-bold">Cart</h4>
        <hr />
        <div
          className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6
              px-6 py-6"
        >
          <img className="rounded-md" src={smalImg} alt="" />
          <div className="">
            <h6>Fall Limited Edition Sneakers</h6>
            <p>
              <span>$125.00 x 3</span>{" "}
              <span className="font-bold"> $375.00</span>
            </p>
          </div>
          <button>
            <DeleteIcon className="ml-auto hover:fill-Orange" />
          </button>
        </div>
        <div>
          <div className="px-6 pb-3 shadow-lg">
            <button className=" w-full rounded-md bg-Orange py-4 text-white transition-all hover:bg-orange-700">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetailsHeader;
