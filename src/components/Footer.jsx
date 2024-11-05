import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section>
      <footer className="footer footer-center bg-white text-black p-10">
        <aside>
          <p className="font-bold text-3xl">Gadget Heaven</p>
          <p className="text-zinc-500">
            Leading the way in cutting edge technology and innovation
          </p>
        </aside>
      </footer>
      <div className="border"></div>
      <footer className="footer place-items-center bg-white text-black p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </nav>
      </footer>
    </section>
  );
}
