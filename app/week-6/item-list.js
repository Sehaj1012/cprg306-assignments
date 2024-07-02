import React, { useState } from "react";
import Item from "./item";

const ItemList = ({ items }) => {  // Accept items as a prop
  const [viewMode, setViewMode] = useState("name");

  const groupByCategory = (items) => {
    return items.reduce((groups, item) => {
      const group = groups[item.category] || [];
      group.push(item);
      groups[item.category] = group;
      return groups;
    }, {});
  };

  const displayItems = () => {
    if (viewMode === "name") {
      return [...items].sort((a, b) => a.name.localeCompare(b.name))
        .map(item => <Item key={item.id} {...item} />);
    } else if (viewMode === "category") {
      return [...items].sort((a, b) => a.category.localeCompare(b.category))
        .map(item => <Item key={item.id} {...item} />);
    } else if (viewMode === "grouped") {
      const grouped = groupByCategory([...items]);
      return Object.keys(grouped).sort().map(category => (
        <div key={category}>
          <h3 className="capitalize mt-4 mb-2 text-lg font-semibold">{category}</h3>
          {grouped[category].sort((a, b) => a.name.localeCompare(b.name)).map(item => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      ));
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-full px-4">
      <div className="flex justify-center space-x-2 my-4">
        <button className={`px-4 py-2 rounded ${viewMode === "name" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}
          onClick={() => setViewMode("name")}>
          Sort by Name
        </button>
        <button className={`px-4 py-2 rounded ${viewMode === "category" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}
          onClick={() => setViewMode("category")}>
          Sort by Category
        </button>
        <button className={`px-4 py-2 rounded ${viewMode === "grouped" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}
          onClick={() => setViewMode("grouped")}>
          Group by Category
        </button>
      </div>
      <ul className="list-none m-4 p-4">
        {displayItems()}
      </ul>
    </div>
  );
};

export default ItemList;
