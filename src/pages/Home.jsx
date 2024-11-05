import Hero from "../components/Hero";
import Gadgets from "./Gadgets";

export default function Home() {
  return (
    <section className="w-11/12 max-w-screen-2xl mx-auto min-h-screen pb-10">
      <Hero />
      <Gadgets />
    </section>
  );
}