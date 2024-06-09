
import React from 'react';


const CardCity = ({tripdata}) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tripdata.map(card => (
          <div key={card.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={card.image} alt={card.city} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{card.city}</h2>
              <p className="text-gray-600">{card.prize}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCity;
