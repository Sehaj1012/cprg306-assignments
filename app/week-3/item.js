import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex justify-between items-center border-b border-gray-300 py-2">
      <div className="flex-1 font-semibold">{name}</div>
      <div className="w-20 text-right">{quantity} pcs</div>
      <div className="flex-1 text-right italic text-gray-500">{category}</div>
    </li>
  );
};

export default Item;