export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  image: string;
}

export type FilterOptions = {
  minPrice: number;
  maxPrice: number;
  minYear: number;
  maxYear: number;
  transmission: string;
  fuelType: string;
};