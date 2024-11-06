import { useEffect, useState } from "react";
import { PiHeart, PiShoppingCart } from "react-icons/pi";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";

export default function GadgetDetails() {
  // const location = useLocation();
  // console.log(location);

  const { product_id } = useParams();
  // console.log(product_id);

  const data = useLoaderData();
  // console.log(data);

  const [gadget, setGadget] = useState({});

  useEffect(() => {
    const gadgetDetail = data.find(
      (gadget) => gadget.product_id === product_id
    );
    setGadget(gadgetDetail);
  }, []);

  const {
    product_id: id,
    availability,
    product_title,
    product_image,
    description,
    specification,
    rating,
    price,
  } = gadget;

  console.log(id);

  return (
    <div className="min-h-screen">
      <div className="bg-myPurple pb-36 relative">
        <div className="min-h-48">
          <Heading title="Product Details" />
        </div>
        <div className="absolute z-20 left-[50%] -translate-x-[50%] bottom-0 translate-y-[50%]">
          <div className="bg-white p-5 rounded-2xl flex gap-5">
            <figure>
              <img
                src={product_image}
                alt={product_title}
                className="rounded-xl object-cover object-center"
              />
            </figure>
            <div className="space-y-3">
              <h2 className="font-bold text-xl">{product_title}</h2>
              <p className="font-semibold text-lg">Price: ${price}</p>
              <p className="text-zinc-500"> {description} </p>
              <p className="font-semibold">Specification</p>
              <ul className="list-inside list-decimal text-zinc-500">
                {specification
                  ? specification.map((item) => <li key={item}>{item}</li>)
                  : "Not available"}
              </ul>
              <p className="font-semibold">Rating</p>
              <div>
                <span className="badge badge-neutral">{rating}</span>
              </div>
              <button className="btn bg-myPurple hover:bg-[#8332C5] text-white rounded-3xl mr-3">
                Add to cart
                <PiShoppingCart />
              </button>
              <span className="badge hover:bg-zinc-200">
                <PiHeart />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
