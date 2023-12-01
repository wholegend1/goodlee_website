import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Person from "@mui/icons-material/Person";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box
      component="nav"
      aria-label="navbar"
      sx={{ flexGrow: 1 }}
      className={styles.navbarBox}
    >
      <List role="menubar" orientation="horizontal">
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component="a"
            className={styles.homeTitle}
            href="/"
          >
            <h1>好力企業平台</h1>
          </ListItemButton>
        </ListItem>

        <ListItem role="none" sx={{ marginInlineStart: "auto" }}>
          <ListItemButton role="menuitem" component="a" href="/">
            首頁
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="/labor">
            線上選工
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="/labor/collection">
            收藏
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="/downloadFile">
            文件下載
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="/backStage">
            後台
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Profile"
            color="primary"
            variant="solid"
            className={styles.loginButton}
          >
            登入
            <Person />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
