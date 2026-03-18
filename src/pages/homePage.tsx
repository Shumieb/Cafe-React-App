import { Link } from "react-router";
import HomeHero from "../components/homeHero";
import MenuTypeCard from "../components/menuTypeCard";
import { FaLink } from "react-icons/fa6";
import SpecialsList from "../components/specialsList";

function HomePage() {
  return (
    <main>
      <HomeHero />
      <SpecialsList />
      <div className="mt-20 text-center py-2">
        <div className="flex justify-center align-center">
          <p className="pt-3 px-2 text-xl text-gray-400">
            <FaLink />
          </p>
          <Link to="/menu" className="text-3xl text-gray-800">
            Our Menu
          </Link>
        </div>

        <p className="text-center text-xl text-gray-700 mt-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="mt-4 py-2 px-2 w-[90%] mx-auto flex justify-center align-center">
        <MenuTypeCard />
        <MenuTypeCard />
        <MenuTypeCard />
      </div>
    </main>
  );
}

export default HomePage;
