import TestimonialCard from "./testimonialCard";

function TestimonialList() {
  return (
    <div className="flex justify-center align-center py-2 px-2 w-[90%] mx-auto text-gray-800">
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </div>
  );
}

export default TestimonialList;
