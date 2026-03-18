import { FaLink } from "react-icons/fa6";
import MenusHero from "../components/menusHero";
import { Link } from "react-router";
import TestimonialList from "../components/testimonialList";
import MenuList from "../components/menuList";

function MenuPage() {
  return (
    <main>
      <MenusHero headerTxt="Menu" />
      <div className="mb-6 mt-12 w-[90%] mx-auto">
        <div className="-z-2 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg"
            alt="special_img"
            className="w-[100%] h-50 object-cover rounded-md -mt-2 -mb-3 -z-4"
          />
        </div>
        <MenuList />
        <div className="-z-2 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg"
            alt="special_img"
            className="w-[100%] h-50 object-cover rounded-md -mt-2 -mb-3 -z-4"
          />
        </div>
        <MenuList />
        <div className="-z-2 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg"
            alt="special_img"
            className="w-[100%] h-50 object-cover rounded-md -mt-2 -mb-3 -z-4"
          />
        </div>
        <MenuList />
      </div>
      <div className="py-2">
        <div className="flex justify-center align-center mb-4">
          <p className="pt-3 px-2 text-xl text-gray-400">
            <FaLink />
          </p>
          <Link to="/testimonials" className="text-3xl text-gray-800">
            Testimonials
          </Link>
        </div>
        <TestimonialList />
      </div>
    </main>
  );
}

export default MenuPage;
