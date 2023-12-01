import * as React from "react";
import Box from "@mui/joy/Box";
import styles from "./homeIntroduction.module.css";

interface IntroductionType {
  title: string;
  subTitle: string;
}
export default function HomeIntroduction(props: IntroductionType) {
  const { title, subTitle } = props;
  return (
    <Box
      className={styles.introductionWrapper}
      aria-label="wrapper"
      sx={{ flexGrow: 1 }}
    >
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
      </div>
    </Box>
  );
}
