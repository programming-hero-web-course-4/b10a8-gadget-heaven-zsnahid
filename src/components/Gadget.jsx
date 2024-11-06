import { useContext } from "react";
// import { GadgetContext } from "../pages/Gadgets";
import { Link } from "react-router-dom";
import { GadgetContext } from "../context/Context";

export default function Gadget() {
  const gadget = useContext(GadgetContext);
  // console.log(gadget);
  const { product_id, product_image, product_title, price } = gadget;
  return (
    <Link to={`/product-details/${product_id}`}>
      <div className="card bg-base-100">
        <figure className="p-5 pb-0">
          <img
            src={product_image}
            alt={product_title}
            className="rounded-xl w-full aspect-video object-cover object-center"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p className="text-zinc-500"> Price: ${price} </p>
          <div className="card-actions">
            <div className="bg-gradient-to-r from-purple-400 to-indigo-400 p-[1px] w-fit h-fit rounded-full">
              <button className="btn bg-white btn-sm font-medium border-none text-myPurple rounded-3xl hover:bg-transparent hover:text-white transition duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
