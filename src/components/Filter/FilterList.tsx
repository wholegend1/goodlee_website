"use client"
import { Box } from "@mui/joy";
import * as React from "react";
import styles from "./filter.module.css"
import Selection from "./Selection";
import Slider from "./Slider";
import SearchBox from "./SearchBox";
export default function FilterList() {
  return (
    <Box className={styles.filterWrapper}>
      <div className={styles.filterBox}>
        <Selection />
        <Slider />
        <SearchBox />
      </div>
    </Box>
  );
}
