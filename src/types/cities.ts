export type City = {
  id: number;
  name: string;
  state: string;
  country: string;
  postal_code: string | null;
  latitude: number | null;
  longitude: number | null;
  active: boolean;
  temp: boolean;
  created_at: Date;
  updated_at: Date;
};

export type CityResponse = {
  availableCities: City[];
  allCities: City[];
};
