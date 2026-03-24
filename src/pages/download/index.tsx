import { Link } from "react-router-dom";
import headerBgImage from "@/assets/images/header-bgImage.png";
import Hero from "./view/Hero";
import Introduction from "./view/Introduction";
import Solutions from "./view/Solutions";
import { FaWhatsapp } from "react-icons/fa6";

const Product = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <div className="md:max-w-[1200px] mx-auto">
        <Introduction />
        <Solutions />
      </div>
      <main
        style={{ backgroundImage: `url(${headerBgImage})` }}
        className="bg-[rgba(2,188,182,1)] bg-cover bg-no-repeat bg-top h-[400px] mx-auto flex items-center justify-center w-full lg:bg-right"
      >
        <section className="text-center text-black flex flex-col gap-4">
          <h1 className="font-switzer text-[30px] font-semibold md:text-[45px] lg:text-[60px] md:w-[70%] w-[90%] lg:w-[60%] mx-auto">
            Talk, Heal Grow - Right from Whatsapp
          </h1>
          <div>
            <p className="text-[16px] w-[90%] mx-auto lg:text-[18px] lg:w-[70%]">
              Access your mental health support anytime with Pal, your AI
              companion on Whatsapp.
            </p>
            <p className="text-[16px] w-[90%] mx-auto lg:text-[18px] lg:w-[70%]">
              Your Mental Well-being Matters, And We are Here for You At
              AuraRest, we believe everyone deserves access to quality,
              compassionate therapy that fits their life. Wherever you are on
              your journey, take the first step with us, because better mental
              health starts with a single conversation
            </p>
          </div>
          <Link
            to="https://api.whatsapp.com/send?phone=18433053974&text=I+need+to+talk&fbclid=PAZXh0bgNhZW0CMTEAAaeWvS1OUq37oCchrWnVvA--aR7sKhJQ7K3Bqwckdp14LnyKZ32Gav-9QYQw8A_aem_PhmYq3MsIooWH8yfhjmxqA"
            className="w-fit mx-auto bg-[#353531] text-[#FFFFFF] px-5 py-3 rounded-md font-semibold transition-transform duration-300 hover:-translate-y-1 flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={25} />
            Chat Pal
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Product;
