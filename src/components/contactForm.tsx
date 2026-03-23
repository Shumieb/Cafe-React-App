import { useState } from "react";

function ContactForm() {
  // variables
  const [name, setName] = useState("");
  const [messageText, setMassageText] = useState("");
  const [subject, setSubject] = useState("");

  // handle form submit
  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(name, messageText, subject);
  };

  return (
    <section className="ps-6">
      <h2 className="text-2xl uppercase text-gray-700 mb-4 text-center mt-2">
        Contact Shumie's Cafe
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
        <div className="mb-4">
          <label htmlFor="subject" className="text-xl pe-1 text-gray-700 block">
            Subject:
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border-2 border-primary outline-primary py-1 px-2 text-lg rounded-md w-[90%] text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="text-xl pe-1 text-gray-700 block">
            Message
          </label>
          <textarea
            name="message"
            rows={7}
            onChange={(e) => setMassageText(e.target.value)}
            className="border-2 border-primary outline-primary py-1 px-2 text-lg rounded-md w-[90%] text-gray-700"
          />
        </div>
        <div className="mt-7">
          <input
            type="submit"
            value="Submit Message"
            className="border-2 border-primary bg-primary text-lg text-gray-700 py-2 px-4 cursor-pointer rounded-md capitalize"
          />
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
