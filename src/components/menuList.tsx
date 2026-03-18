import { FaLink } from "react-icons/fa6";
import { Link } from "react-router";
import MenuItemCard from "./menuItemCard";

function MenuList() {
  return (
    <section className="bg-secondary py-6 px-2 z-10">
      <div className="flex align-center justify-center mb-2">
        <p className="pt-2 pe-1 text-xl text-gray-400">
          <FaLink />
        </p>
        <Link to="/menu/1" className="text-2xl uppercase text-gray-700">
          Coffee Menu
        </Link>
      </div>
      <div className="grid grid-cols-2 px-6 py-2 gap-6">
        <div>
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
        </div>
        <div>
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
          <MenuItemCard />
        </div>
      </div>
    </section>
  );
}

export default MenuList;
