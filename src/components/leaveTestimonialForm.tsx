import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";

function LeaveTestimonialForm() {
  // variables
  const [name, setName] = useState("");
  const [testimonialText, setTestimonialText] = useState("");
  const [receiptId, setReceiptId] = useState("");
  const [dateOfVisit, setDateOfVisit] = useState("");
  const [rating, setRating] = useState(1);

  // handle form submit
  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(name, testimonialText, dateOfVisit, rating);
  };

  return (
    <section className="ps-6">
      <h2 className="text-2xl uppercase text-gray-700 mb-4 text-center mt-2">
        Leave a Testimonial
      </h2>
      <form onSubmit={(e) => handleFormSubmit(e)} className="mb-4">
        <div className="mb-4">
          <label htmlFor="name" className="text-xl pe-1 text-gray-700 block">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-primary outline-primary py-1 px-2 text-lg rounded-md w-[90%] text-gray-700"
          />
        </div>
        <div className="mb-4 flex align-center">
          <label htmlFor="rating" className="text-xl pe-1 text-gray-700 me-2">
            Rating:
          </label>
          <div className="flex align-center text-2xl pt-0.5">
            <FaStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="testimonial"
            className="text-xl pe-1 text-gray-700 block"
          >
            Testimonial
          </label>
          <textarea
            name="testimonial"
            rows={7}
            onChange={(e) => setTestimonialText(e.target.value)}
            className="border-2 border-primary outline-primary py-1 px-2 text-lg rounded-md w-[90%] text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dateOfVisit"
            className="text-xl pe-1 text-gray-700 block"
          >
            Date of Visit:
          </label>
          <input
            type="date"
            name="dateOfVisit"
            value={dateOfVisit}
            onChange={(e) => setDateOfVisit(e.target.value)}
            className="border-2 border-primary outline-primary py-1 px-2 text-lg rounded-md w-[90%] text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="receiptId"
            className="text-xl pe-1 text-gray-700 block"
          >
            Receipt Id:
          </label>
          <input
            type="text"
            name="receiptId"
            value={receiptId}
            onChange={(e) => setReceiptId(e.target.value)}
            className="border-2 border-primary outline-primary py-1 px-2 text-lg rounded-md w-[90%] text-gray-700"
          />
        </div>
        <div className="mt-7">
          <input
            type="submit"
            value="Submit Testimonial"
            className="border-2 border-primary bg-primary text-lg text-gray-700 py-2 px-4 cursor-pointer rounded-md capitalize"
          />
        </div>
      </form>
    </section>
  );
}

export default LeaveTestimonialForm;
