import * as React from "react";
import Box from "@mui/joy/Box";
import styles from "./homeExplain.module.css";
import { Button, Input } from "@mui/joy";
import MailIcon from "@mui/icons-material/Mail";
export default function HomeExplain() {
  return (
    <Box className={styles.wrapper} aria-label="wrapper" sx={{ flexGrow: 1 }}>
      <div className={styles.title}>
        立即註冊成為一員
      </div>
      <Input
        startDecorator={<MailIcon />}
        endDecorator={<Button>申請</Button>}
        sx={{
          "--Input-radius": "10px",
          "--Input-gap": "10px",
          "--Input-placeholderOpacity": 0.4,
        }}
        className={styles.submitButton}
      ></Input>
    </Box>
  );
}
