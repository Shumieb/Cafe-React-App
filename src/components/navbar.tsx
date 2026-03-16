import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="bg-secondary py-2 px-2 text-gray-800 text-lg mb-5">
      <ul className="flex justify-between align-center w-[90%] mx-auto">
        <div className="flex align-center">
          <li className="mx-3">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="mx-3">
            <Link to="/about">About</Link>
          </li>
        </div>
        <li className="text-xl">
          <Link to="/">Shumie's Cafe</Link>
        </li>
        <div className="flex justify-end align-center">
          <li className="mx-3">
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li className="mx-3">
            <Link to="/contacts">Contacts</Link>
          </li>
          <li className="mx-3">
            <Link to="/reservation">Reservation</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
