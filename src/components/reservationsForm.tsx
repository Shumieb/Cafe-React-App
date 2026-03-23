import { useState } from "react";

function ReservationsForm() {
  // variables
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [numOfPeople, setNumOfPeople] = useState(2);
  const [bookingTimeId, setBookingTimeId] = useState(1);

  // handle form submit
  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(name, phone, numOfPeople, bookingTimeId);
  };

  return (
    <section className="ps-6">
      <h2 className="text-2xl uppercase text-gray-700 mb-3">
        Make A Reservation
      </h2>
      <form onSubmit={(e) => handleFormSubmit(e)}>
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
          <label htmlFor="phone" className="text-xl pe-1 text-gray-700 block">
            Phone Number:
          </label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            min={2}
            max={6}
            className="border-2 border-primary outline-primary py-1 px-2 text-lg rounded-md w-[90%] text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="people" className="text-xl pe-1 text-gray-700 block">
            Number of People:
          </label>
          <p className="text-gray-600 text-lg italic w-[90%]">
            You can only make a reservation of 2-6 people. If you would like to
            make a reservation for more than 6 people contact the Cafe.
          </p>
          <input
            type="number"
            name="people"
            value={numOfPeople}
            onChange={(e) => setNumOfPeople(Number(e.target.value))}
            className="border-2 border-primary outline-primary py-1 px-2 text-lg rounded-md w-[90%] text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="text-xl pe-1 text-gray-700 block">
            Time:
          </label>
          <select
            name="time"
            value={bookingTimeId}
            onChange={(e) => setBookingTimeId(Number(e.target.value))}
            className="border-2 border-primary outline-primary py-1 px-2 text-lg rounded-md w-[90%] text-gray-700 bg-secondary"
          >
            <option value="1">1800</option>
            <option value="2">1900</option>
            <option value="3">2000</option>
            <option value="4">2100</option>
          </select>
        </div>
        <div className="mt-7">
          <input
            type="submit"
            value="Make Reservation"
            className="border-2 border-primary bg-primary text-lg text-gray-700 py-2 px-4 cursor-pointer rounded-md capitalize"
          />
        </div>
      </form>
    </section>
  );
}

export default ReservationsForm;
