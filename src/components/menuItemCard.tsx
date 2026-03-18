function MenuItemCard() {
  return (
    <div className="py-2 mb-1">
      <div className="flex align-center text-lg">
        <p className="text-xl pe-1 text-gray-700">Smoothie</p>
        <p className="w-[80%] text-center border-b-1 border-b-gray-400 text-secondary">
          spacing
        </p>
        <p className="text-xl ps-1 text-gray-700">£10</p>
      </div>
      <p className="text-lg text-gray-500">{`(banana, matcha, pears, apples)`}</p>
    </div>
  );
}

export default MenuItemCard;
