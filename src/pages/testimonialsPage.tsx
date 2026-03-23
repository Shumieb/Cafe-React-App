import { FaRegStar, FaStar } from "react-icons/fa6";
import PagesHero from "../components/PagesHero";
import TestimonialCard from "../components/testimonialCard";
import LeaveTestimonialForm from "../components/leaveTestimonialForm";

function TestimonialsPage() {
  return (
    <main>
      <PagesHero headerTxt="Testimonials" />
      <div className="flex justify-center align-center mt-6">
        <p className="text-xl text-gray-800 ps-2 me-2">Overall Rating: </p>
        <div className="flex align-center text-xl pt-1.5">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </div>
      </div>
      <p className="text-lg text-center text-gray-800 py-2 italic">
        From 28 Customers
      </p>
      <div className="grid grid-cols-3 gap-4 w-[90%] mx-auto mt-6">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <section className="bg-secondary py-6 px-4 mt-12 mb-4">
        <div className="w-[60%] mx-auto">
          <LeaveTestimonialForm />
        </div>
      </section>
    </main>
  );
}

export default TestimonialsPage;
