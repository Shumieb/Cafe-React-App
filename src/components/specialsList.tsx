import { Link } from "react-router";
import SpecialCard from "./specialCard";
import { FaLink } from "react-icons/fa6";

function SpecialsList() {
  return (
    <section className="bg-secondary py-6 px-2 mt-12 ">
      <div className="w-[90%] mx-auto grid grid-cols-2 gap-4">
        <div className="px-2 ">
          <div className="flex align-center">
            <p className="pt-2 pe-1 text-xl text-gray-400">
              <FaLink />
            </p>
            <Link to="/specials" className="text-2xl uppercase text-gray-700">
              Our Specials
            </Link>
          </div>

          <p className="text-lg pb-2 px-2 pt-2 text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, hic!
          </p>
          <div className="py-2 px-2">
            <SpecialCard />
            <SpecialCard />
            <SpecialCard />
            <SpecialCard />
            <SpecialCard />
          </div>
        </div>
        <div className="mt-4 relative">
          <img
            src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg"
            alt="special_img"
            className="w-120 h-130 object-cover absolute left-[15%] top-5"
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialsList;
