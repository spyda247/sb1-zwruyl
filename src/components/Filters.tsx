import React from 'react';
import { FilterOptions } from '../types';
import { SlidersHorizontal } from 'lucide-react';

interface FiltersProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export function Filters({ filters, onFilterChange }: FiltersProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal className="text-blue-600" />
        <h2 className="text-xl font-bold">Filters</h2>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Min Price
            </label>
            <input
              type="number"
              value={filters.minPrice}
              onChange={(e) => onFilterChange({ ...filters, minPrice: Number(e.target.value) })}
              className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Max Price
            </label>
            <input
              type="number"
              value={filters.maxPrice}
              onChange={(e) => onFilterChange({ ...filters, maxPrice: Number(e.target.value) })}
              className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Min Year
            </label>
            <input
              type="number"
              value={filters.minYear}
              onChange={(e) => onFilterChange({ ...filters, minYear: Number(e.target.value) })}
              className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Max Year
            </label>
            <input
              type="number"
              value={filters.maxYear}
              onChange={(e) => onFilterChange({ ...filters, maxYear: Number(e.target.value) })}
              className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Transmission
          </label>
          <select
            value={filters.transmission}
            onChange={(e) => onFilterChange({ ...filters, transmission: e.target.value })}
            className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Any</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fuel Type
          </label>
          <select
            value={filters.fuelType}
            onChange={(e) => onFilterChange({ ...filters, fuelType: e.target.value })}
            className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Any</option>
            <option value="Gasoline">Gasoline</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
      </div>
    </div>
  );
}