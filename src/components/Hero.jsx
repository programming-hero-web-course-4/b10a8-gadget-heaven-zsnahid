import { Link } from "react-router-dom";
import bannerImg from "../assets/banner.jpg";

export default function Hero() {
  return (
    <div className="hero items-start bg-myPurple min-h-[60vh] rounded-b-2xl relative">
      <div className="hero-content text-center">
        <div className="max-w-5xl text-white">
          <h1 className="text-5xl font-bold">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="py-6 max-w-2xl mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. <br /> From smart devices to the coolest accessories, we
            have it all!
          </p>
          <button className="btn text-myPurple rounded-3xl">
            <Link href="gadgets">Shop Now</Link>
          </button>
        </div>
      </div>
      <div className="absolute z-10 -bottom-10 translate-y-[60%] p-5 border-t-2 rounded-2xl bg-white bg-opacity-30 backdrop-blur">
        <figure>
          <img
            src={bannerImg}
            className="h-96 aspect-video rounded-2xl object-cover object-center"
          />
        </figure>
      </div>
    </div>
  );
}
