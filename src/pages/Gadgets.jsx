import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "../components/Gadget";

import { GadgetContext } from "../context/Context";

// export const GadgetContext = createContext([]);

export default function CategoryGadgets() {
  const gadgetsData = useLoaderData();
  // console.log(gadgetsData);
  const { category } = useParams();
  // console.log(category);

  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    if (category) {
      const gadgets = [...gadgetsData].filter(
        (gadget) => gadget.category === category
      );
      setGadgets(gadgets);
    } else {
      setGadgets(gadgetsData);
    }
  }, [category]);

  // console.log(gadgets);

  return (
    <div className="grid grid-cols-3 gap-10">
      {gadgets.length
        ? gadgets.map((gadget) => (
            <GadgetContext.Provider
              key={gadget.product_id}
              value={gadget}
            >
              <Gadget />
            </GadgetContext.Provider>
          ))
        : "No data found"}
    </div>
  );
}
