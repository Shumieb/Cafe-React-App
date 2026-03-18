interface PropTypes {
  headerTxt: string;
}

function MenusHero({ headerTxt }: PropTypes) {
  return (
    <section className="mt-6">
      <div className="bg-primary py-8 mx-auto text-center w-[80%] rounded">
        <p className="text-6xl text-gray-50 uppercase py-4">{headerTxt}</p>
      </div>
    </section>
  );
}

export default MenusHero;
