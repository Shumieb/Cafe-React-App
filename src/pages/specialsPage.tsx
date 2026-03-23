import { FaLink } from "react-icons/fa6";
import SpecialsList from "../components/specialsList";
import TestimonialList from "../components/testimonialList";
import { Link } from "react-router";
import FounderMessageSect from "../components/founderMessageSect";
import PagesHero from "../components/PagesHero";

function SpecialsPage() {
  return (
    <main>
      <PagesHero headerTxt="Specials" />
      <div className="mb-18">
        <SpecialsList />
      </div>
      <div className="mt-13 mb-10">
        <FounderMessageSect />
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
