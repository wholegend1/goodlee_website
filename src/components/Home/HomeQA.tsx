import * as React from "react";
import Box from "@mui/joy/Box";
import styles from "../../styles/homeQA.module.css";
import Image from "next/image";

export default function HomeQA() {
  return (
    <Box className={styles.wrapper} aria-label="wrapper" sx={{ flexGrow: 1 }}>
      <div className={styles.title}>疑難雜症QA</div>
      <div className={styles.questionWrapper}>
        <div className={styles.questionBox}>
          <button className={styles.qaButton}>+</button>
          <div className={styles.des}>
            ewqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
          </div>
        </div>
        <div className={styles.questionBox}>
          <button className={styles.qaButton}>+</button>
          <div className={styles.des}>
            ewqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
          </div>
        </div>
        <div className={styles.questionBox}>
          <button className={styles.qaButton}>+</button>
          <div className={styles.des}>
            ewqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
          </div>
        </div>
        <div className={styles.questionBox}>
          <button className={styles.qaButton}>+</button>
          <div className={styles.des}>
            ewqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
          </div>
        </div>
      </div>
    </Box>
  );
}
