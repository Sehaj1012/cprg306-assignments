'use client'
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

const Page = () => {
  
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-6 mb-6">Shopping List Application</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
};

export default Page;
