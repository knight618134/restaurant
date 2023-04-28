import React from 'react';

const MenuCard = ({ item }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <div className="h-48 bg-gray-200"></div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{item.name}</h3>
        <p className="text-gray-700 mb-2">{item.description}</p>
        <div className="flex justify-between">
          <span className="text-gray-600">{item.price} NTD</span>
          <button className="px-2 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;