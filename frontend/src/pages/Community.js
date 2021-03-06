import * as React from "react";
import Box from "@mui/material/Box";
import Board from "../components/community/Board";

export default function Community() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "75vh",
      }}
    >
      <Board />
    </Box>
  );
}
