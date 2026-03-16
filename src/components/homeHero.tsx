import { Link } from "react-router";

function HomeHero() {
  return (
    <section className="mt-6">
      <div className="bg-primary py-8 mx-auto text-center w-[80%] rounded">
        <p className="text-6xl text-gray-50 uppercase py-4">Shumie's Cafe</p>
        <div className="hero-hr mb-2">
          <hr />
        </div>
        <p className="text-lg py-4 px-2 text-gray-50 w-[70%] mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          nesciunt natus porro aspernatur voluptatibus quod ducimus fuga
          dolorem, dolores doloremque?
        </p>
        <div className="mt-6">
          <Link
            to="/reservation"
            className="py-4 px-6 text-lg bg-white text-gray-700 rounded"
          >
            Book A Table
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
