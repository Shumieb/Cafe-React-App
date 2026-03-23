import OpeningTimeCard from "./openingTimeCard";

function OpeningTimes() {
  return (
    <section>
      <h2 className="text-2xl uppercase text-gray-700 mb-3">Opening Times</h2>
      <div>
        <OpeningTimeCard />
        <OpeningTimeCard />
        <OpeningTimeCard />
        <OpeningTimeCard />
        <OpeningTimeCard />
        <OpeningTimeCard />
        <OpeningTimeCard />
      </div>
      <p className="text-lg text-gray-700 pt-3 mt-2">
        Want to book the Cafe for the whole day? Call: 091524520552
      </p>
    </section>
  );
}

export default OpeningTimes;
