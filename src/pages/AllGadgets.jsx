import { createContext, useEffect, useState } from "react";
import Gadget from "../components/Gadget";

export const GadgetContext = createContext([]);

export default function AllGadgets() {
  // const { gadgets } = useLoaderData();
  // console.log(gadgets);
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    fetch("gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);
  // console.log(gadgets);

  return (
    <div className="grid grid-cols-3 gap-10">
      {gadgets
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
