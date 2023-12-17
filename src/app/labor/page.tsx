"use client";
import data from "@/app/data"; //之後要用其他方式導入
import CardLister from "@/components/CardList/CardLister";
import FilterList from "@/components/Filter/FilterList";
import { Person } from "@/types";
import { applyFilters } from "@/utils/filterUtils";
import { useEffect, useState } from "react";

export default function Labor() {
  const [latestWorkers, setLatestWorkers] = useState<any>([]);
  const [dataState, setDataState] = useState<Person[]>(data); //之後要改swr
  useEffect(() => {
    const latest = data.slice(0, 4);
    setLatestWorkers(latest);
  }, []);
  const [selectedFilters, setSelectedFilters] = useState<any>({
    selectFilter: null,
    sliderValue: [,],
    searchValue: "",
  });
  const applyFiltersAndUpdate = (filters: any) => {
    setSelectedFilters((prevFilters: any) => ({
      ...prevFilters,
      ...filters,
    }));
    applyFilters(data, selectedFilters);
  };
  return (
    <div className="px-3 py-20 pt-0 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 flex gap-[50px] flex-col">
      <div className="new-labor-box">
        <CardLister title={"最近上線的移工"} data={latestWorkers} />
      </div>
      <FilterList applyFilters={applyFiltersAndUpdate} />
      <CardLister data={dataState} />
    </div>
  );
}
