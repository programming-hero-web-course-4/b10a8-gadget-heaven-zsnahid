import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import Hero from "../components/Hero";

export default function Home() {
  const categories = useLoaderData();
  return (
    <section className="w-11/12 max-w-screen-2xl mx-auto pb-10">
      <Hero />
      <div className="mt-[20rem]">
        <h2 className="text-center text-3xl font-semibold mb-10">
          Explore Cutting Edge Gadgets
        </h2>
        <div className="flex gap-10">
          <Categories categories={categories} />
          <Outlet />
        </div>
      </div>
    </section>
  );
}
