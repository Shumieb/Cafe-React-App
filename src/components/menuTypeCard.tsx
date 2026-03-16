import { Link } from "react-router";
import { FaWineGlass, FaLink } from "react-icons/fa6";

function MenuTypeCard() {
  return (
    <div className="py-2 mx-2 px-2 text-center">
      <div className="flex justify-center align-center text-4xl text-gray-500 mb-3">
        <p className="border-1 border-dashed border-gray-400 py-2 px-2 rounded-full">
          <FaWineGlass />
        </p>
      </div>
      <div className="flex justify-center align-center">
        <p className="pt-2 px-2 text-xl text-gray-400">
          <FaLink />
        </p>
        <Link to="/menu/coffee" className="text-2xl text-gray-700">
          Coffee Menu
        </Link>
      </div>

      <p className="py-2 text-gray-700 text-xl px-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi
        necessitatibus illo inventore adipisci eos dolor accusantium totam
        aspernatur.
      </p>
    </div>
  );
}

export default MenuTypeCard;
