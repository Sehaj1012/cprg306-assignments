import React from "react";
import ItemList from "./item-list";

const Page = () => {
  return (
    <main className="bg-white min-h-screen p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;