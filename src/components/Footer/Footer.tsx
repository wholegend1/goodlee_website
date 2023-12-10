import * as React from "react";
import Box from "@mui/joy/Box";

export default function Footer() {
  return (
    <Box
      component="footer"
      aria-label="footer"
      sx={{ flexGrow: 1 }}
      className="footer bg-slate-100 p-4 text-center"
    >
      Copyright © 2023 GoodLee. All rights reserved.
    </Box>
  );
}
