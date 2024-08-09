import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
    return (
        <li className="cursor-pointer hover:bg-blue-200 p-2 rounded flex justify-between items-center" onClick={() => onSelect(name)}>
            <div className="flex-1 text-lg font-semibold">{name}</div>
            <div className="flex-1 text-center text-lg">{quantity} pcs</div>
            <div className="flex-1 text-right italic">{category}</div>
        </li>
    );
};

export default Item;
