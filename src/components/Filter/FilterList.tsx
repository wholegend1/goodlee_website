"use client";
import { Box } from "@mui/joy";
import * as React from "react";
import styles from "./filter.module.css";
import Selection from "./Selection";
import Slider from "./Slider";
import SearchBox from "./SearchBox";
import { useEffect, useState } from "react";
import { FilterType } from "@/types";
interface FilterListProps {
  applyFilters: (filters: any) => void;
}
export default function FilterList({ applyFilters }: FilterListProps) {
  const [selectedFilters, setSelectedFilters] = useState<FilterType>({
    selectFilter: null, // 初始化 selectFilter 為 null
    sliderValue: [], // 初始化 sliderValue 為 0
    searchValue: "", // 初始化 searchValue 為空字符串
  });
  const handleSelectChange = (value: any) => {
    setSelectedFilters({ ...selectedFilters, selectFilter: value });
  };

  const handleSliderChange = (value: any) => {
    setSelectedFilters({ ...selectedFilters, sliderValue: value });
  };

  const handleSearchChange = (value: any) => {
    setSelectedFilters({ ...selectedFilters, searchValue: value });
  };
  useEffect(() => {
    applyFilters(selectedFilters);
  }, [
    selectedFilters.selectFilter,
    selectedFilters.sliderValue,
    selectedFilters.searchValue,
  ]);
  return (
    <Box className={styles.filterWrapper}>
      <div className={styles.filterBox}>
        <Selection  handleSelectChange={handleSelectChange} />
        <Slider  handleSliderChange={handleSliderChange} />
        <SearchBox handleSearchChange={handleSearchChange} />
      </div>
    </Box>
  );
}
