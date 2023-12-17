"use client";
import CardLister from "@/components/CardList/CardLister";
import HomeIntroduction from "../components/Home/HomeIntroduction";
import data from "./data";
import FilterList from "@/components/Filter/FilterList";
import HomeInformation from "@/components/Home/HomeInformation";
import HomeQA from "@/components/Home/HomeQA";
import HomeExplain from "@/components/Home/HomeExplain";
import { useState } from "react";
import { applyFilters } from "@/utils/filterUtils";
import { FilterType, Person } from "@/types";

export default function Home() {
  const [dataState, setDataState] = useState<Person[]>(data); //之後要改swr
  const [selectedFilters, setSelectedFilters] = useState<FilterType>({
    selectFilter: null,
    sliderValue: [],
    searchValue: "",
  });
  const applyFiltersAndUpdate = (filters: FilterType) => {
    setSelectedFilters((prevFilters: FilterType) => ({
      ...prevFilters,
      ...filters,
    }));
    applyFilters(data, selectedFilters);
  };
  const filteredData = applyFilters(dataState, selectedFilters);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HomeIntroduction
        title={"找到您最適合的"}
        subTitle={"雇主與仲介公司最好的溝通橋樑"}
      />
      <div className="px-3 py-20 pt-2 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 flex gap-[50px] flex-col w-[100%]">
        <FilterList applyFilters={applyFiltersAndUpdate} />
        <CardLister data={filteredData} />
      </div>
      <div className="bg-slate-200 flex gap-[50px] py-20 flex-col px-3">
        <HomeInformation />
        <HomeQA />
        <HomeExplain />
      </div>
    </main>
  );
}
