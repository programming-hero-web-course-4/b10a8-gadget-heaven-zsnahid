import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Root() {
  return (
    <section className="font-sora bg-zinc-100 py-5">
      <NavBar />
      <div className="min-h-[calc(100vh-27rem)]">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
}
