import { FaLink } from "react-icons/fa6";
import MenusHero from "../components/menusHero";
import SpecialsList from "../components/specialsList";
import TestimonialList from "../components/testimonialList";
import { Link } from "react-router";

function SpecialsPage() {
  return (
    <main>
      <MenusHero headerTxt="Specials" />
      <div className="mb-18">
        <SpecialsList />
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

export default SpecialsPage;
