"use client"
import React, { useState } from "react";
import Head from "next/head";
import NewItem from "./new-item";

const Page = () => {
  const [name, setName] = useState('');

  const [quantity, setQuantity] = useState(1);

  const [category, setCategory] = useState('produce');

    return (
        <div className="bg-gray-100 min-h-screen p-6">
        <h1 className="text-center text-3xl font-bold text-blue-600 mt-4 mb-6">Add New Item</h1>
        <NewItem
            name={name}
            setName={setName}
            quantity={quantity}
            setQuantity={setQuantity}
            category={category}
            setCategory={setCategory}
        />
        </div>
    );
};

export default Page;
