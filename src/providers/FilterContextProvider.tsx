"use client";

// FilterContext.tsx
import data from "@/app/data";
import React, { createContext, useContext, useState, useEffect } from "react";

interface FilterContextType {
  countries: string[];
  minAge: number;
  maxAge: number;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error(
      "useFilterContext must be used within a FilterContextProvider"
    );
  }
  return context;
};

export const FilterContextProvider = ({ children }: any) => {
  const [countries, setCountries] = useState<string[]>([]);
  const [minAge, setMinAge] = useState<number>(18);
  const [maxAge, setMaxAge] = useState<number>(60);

  useEffect(() => {
    const extractedCountries: string[] = Array.isArray(data)
      ? Array.from(new Set(data.map((item: any) => item.country)))
      : [];

    const ageArray: number[] = data.map((item) => item.age);
    const minAgeValue = Math.min(...ageArray);
    const maxAgeValue = Math.max(...ageArray);

    const min = minAgeValue > 18 ? minAgeValue : 18;
    const max = maxAgeValue < 50 ? maxAgeValue : 60;

    setCountries(extractedCountries);
    setMinAge(min);
    setMaxAge(max);
  }, []);

  const contextValue: FilterContextType = {
    countries,
    minAge,
    maxAge,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
