import { useLoaderData } from "react-router-dom";

export default function Gadgets() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="mt-[20rem]">
      <h2 className="text-center text-3xl font-semibold">
        Explore Cutting Edge Gadgets
      </h2>
    </div>
  );
}
