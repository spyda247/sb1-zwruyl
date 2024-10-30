import React from 'react';
import { Car } from '../types';
import { Fuel, Gauge, Calendar, BanknoteIcon } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onClick: (car: Car) => void;
}

export function CarCard({ car, onClick }: CarCardProps) {
  return (
    <div 
      onClick={() => onClick(car)}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={car.image} 
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-white font-bold text-xl">
            {car.year} {car.make} {car.model}
          </h3>
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">
            ${car.price.toLocaleString()}
          </span>
          <span className="text-gray-600">
            {car.mileage.toLocaleString()} miles
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Fuel size={18} />
            {car.fuelType}
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Gauge size={18} />
            {car.transmission}
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar size={18} />
            {car.year}
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <BanknoteIcon size={18} />
            Finance Available
          </div>
        </div>
      </div>
    </div>
  );
}