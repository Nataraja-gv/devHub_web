// PlanCard.jsx
import React from 'react';

const PlanCard = ({ name, price, feedsPerDay, features, onSubscribe }) => (
  <div className="border rounded-lg p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-4">{name}</h2>
    <p className="text-gray-700 mb-2">Feeds per day: {feedsPerDay}</p>
    <p className="text-3xl font-bold mb-4">Rs.{price}/month</p>
    <ul className="mb-4">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-600">• {feature}</li>
      ))}
    </ul>
    <button
      onClick={onSubscribe}
      className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
    >
      Subscribe
    </button>
  </div>
);

export default PlanCard;
