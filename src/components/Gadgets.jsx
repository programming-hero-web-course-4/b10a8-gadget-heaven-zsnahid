import { createContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "./Gadget";

export const GadgetContext = createContext({});

export default function Gadgets() {
  const { gadgetsData, categoriesData } = useLoaderData();
  const {categoryName} = useParams()
  const [gadgets, setGadgets] = useState();

  useEffect(()=>{
    
  },[categoryName])
  // console.log(gadgetsData, categoriesData);
  return (
    <div className="mt-[20rem]">
      <h2 className="text-center text-3xl font-semibold mb-10">
        Explore Cutting Edge Gadgets
      </h2>
      <div className="flex gap-10">
        <div className="w-52 h-fit bg-white p-5 rounded-xl space-y-5 sticky top-5">
          <button className="btn btn-block bg-myPurple text-white rounded-3xl">
            All Products
          </button>
          {categoriesData.map((category, index) => (
            <button
              key={index}
              className="btn btn-block rounded-3xl"
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-10">
          {gadgetsData.map((gadget) => (
            <GadgetContext.Provider
              key={gadget.product_id}
              value={gadget}
            >
              <Gadget />
            </GadgetContext.Provider>
          ))}
        </div>
      </div>
    </div>
  );
}
