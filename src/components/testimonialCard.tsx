import { FaUserLarge, FaRegStar, FaStar } from "react-icons/fa6";

function TestimonialCard() {
  return (
    <div className="py-4 px-4 mx-3 border-1 border-secondary rounded-md shadow-md">
      <div className="flex align-center mb-1">
        <p className="text-xl me-1 py-2 bg-primary px-2 rounded-full shadow-md">
          <FaUserLarge />
        </p>
        <p className="text-xl ms-1">user_one</p>
      </div>
      <div className="flex align-center text-lg py-2">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </div>
      <p className="text-lg ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro sit
        ipsum sapiente.
      </p>
    </div>
  );
}

export default TestimonialCard;
