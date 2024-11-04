import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Root() {
  return (
    <section className="font-sora bg-zinc-100 py-5">
      <NavBar />
      <Outlet />
      <Footer />
    </section>
  );
}
