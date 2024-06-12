import React from 'react';

const NewItem = ({ name, setName, quantity, setQuantity, category, setCategory }) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Item Added: Name - ${name}, Quantity - ${quantity}, Category - ${category}`);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow">
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input 
          type="text"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">
          Quantity:
        </label>
        <input 
          type="number"
          id="quantity"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          min="1"
          max="99"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
          Category:
        </label>
        <select 
          id="category"
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add Item
      </button>
    </form>
  );
};

export default NewItem;
