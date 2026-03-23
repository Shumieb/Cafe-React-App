function FounderMessageSect() {
  return (
    <section className="grid grid-cols-2 gap-2">
      <div className="py-2 px-2 flex flex-col justify-center align-center">
        <img
          src="https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg"
          alt="founders picture"
          className="w-96 h-68 object-cover mx-auto rounded-md"
        />
      </div>
      <div className="py-2 px-2 flex flex-col justify-center align-center">
        <p className="text-3xl text-gray-800 mb-3 px-2 pt-6">
          Founder's Message
        </p>
        <p className="w-[80%] px-2 py-2 text-gray-800 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          repudiandae veritatis laboriosam ratione nostrum quo doloribus qui,
          laborum ab tenetur aliquid quibusdam tempora in. At. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Voluptates repudiandae
          veritatis laboriosam ratione nostrum quo doloribus qui, laborum ab
          tenetur aliquid quibusdam tempora in. At.
        </p>
        <p className="text-gray-800 text-xl italic px-2 py-2">XO Shumie</p>
      </div>
    </section>
  );
}

export default FounderMessageSect;
