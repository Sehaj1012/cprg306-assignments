'use client'
import React, { useState, useEffect } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import { getItems, addItem } from '../_services/shopping-list-service';

const Page = () => {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  async function loadItems() {
    const userId = "VfSIffKCikgBb30pWamTrgOkMk03";
    try {
      const fetchedItems = await getItems(userId);
      setItems(fetchedItems);
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  }

  useEffect(() => {
    loadItems();  // Calls loadItems when the component mounts
  }, []);  // Empty dependency array ensures it only runs once on mount

  const handleAddItem = async (newItem) => {
    const userId = "VfSIffKCikgBb30pWamTrgOkMk03";
    try {
      const docId = await addItem(userId, newItem);
      const updatedItem = { ...newItem, id: docId };  // Add the Firestore document ID to the new item
      setItems(prevItems => [...prevItems, updatedItem]);  // Update the state with the new item
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').split(',')[0].trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <div className="flex justify-between">
      <div className="w-1/2 p-4">
        <h1 className="text-center text-2xl font-bold mt-6 mb-6">Shopping List Application</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2 p-4">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
};

export default Page;
