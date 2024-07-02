import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  // Function to generate a random ID
  const generateId = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: generateId(), // Generate a random ID for the new item
      name: name,
      quantity: quantity,
      category: category
    };

    onAddItem(newItem); // Call the onAddItem function passed via props with the new item

    // Reset form fields
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto my-4 p-4">
      <div className="mb-3">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={e => setQuantity(parseInt(e.target.value, 10))}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          min="1"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
        <select
          id="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600">Add Item</button>
    </form>
  );
};

export default NewItem;
