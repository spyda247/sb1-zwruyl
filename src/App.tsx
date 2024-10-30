import React, { useState } from 'react';
import { Car, FilterOptions } from './types';
import { CarCard } from './components/CarCard';
import { Filters } from './components/Filters';
import { SearchBar } from './components/SearchBar';
import { Car as CarIcon } from 'lucide-react';

// Sample data - in a real app, this would come from an API
const CARS: Car[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    price: 25000,
    mileage: 15000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 45000,
    mileage: 5000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    make: 'Honda',
    model: 'Civic',
    year: 2021,
    price: 22000,
    mileage: 25000,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    make: 'BMW',
    model: 'i4',
    year: 2023,
    price: 55000,
    mileage: 1000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80'
  }
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    minPrice: 0,
    maxPrice: 1000000,
    minYear: 2000,
    maxYear: 2024,
    transmission: '',
    fuelType: ''
  });

  const filteredCars = CARS.filter(car => {
    const matchesSearch = 
      car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.year.toString().includes(searchQuery);

    const matchesFilters =
      car.price >= filters.minPrice &&
      car.price <= filters.maxPrice &&
      car.year >= filters.minYear &&
      car.year <= filters.maxYear &&
      (filters.transmission === '' || car.transmission === filters.transmission) &&
      (filters.fuelType === '' || car.fuelType === filters.fuelType);

    return matchesSearch && matchesFilters;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CarIcon className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">CarFinder</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Filters filters={filters} onFilterChange={setFilters} />
          </div>

          <div className="lg:col-span-3">
            {filteredCars.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No cars found</h3>
                <p className="text-gray-500">Try adjusting your filters or search query</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCars.map(car => (
                  <CarCard
                    key={car.id}
                    car={car}
                    onClick={setSelectedCar}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {selectedCar && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-64">
                <img 
                  src={selectedCar.image} 
                  alt={`${selectedCar.year} ${selectedCar.make} ${selectedCar.model}`}
                  className="w-full h-full object-cover rounded-t-xl"
                />
                <button
                  onClick={() => setSelectedCar(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {selectedCar.year} {selectedCar.make} {selectedCar.model}
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-gray-600">Price</p>
                    <p className="text-xl font-bold">${selectedCar.price.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Mileage</p>
                    <p className="text-xl font-bold">{selectedCar.mileage.toLocaleString()} miles</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Fuel Type</p>
                    <p className="text-xl font-bold">{selectedCar.fuelType}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Transmission</p>
                    <p className="text-xl font-bold">{selectedCar.transmission}</p>
                  </div>
                </div>
                <button
                  onClick={() => window.location.href = `mailto:sales@carfinder.com?subject=Inquiry about ${selectedCar.year} ${selectedCar.make} ${selectedCar.model}`}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Seller
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;