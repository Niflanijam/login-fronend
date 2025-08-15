import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import DietForm from "../components/DietForm";
import DietResult from "../components/DietResult";

export default function Home() {
  const [result, setResult] = useState(null);

  return (
    <>
      <Header />
      <Box sx={{ p: 4, background: "#f7f7f7", minHeight: "100vh" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Personalized Diet Planner
        </Typography>
        {/* <DietForm onResult={setResult} /> */}
        {/* <DietResult result={result} /> */}
      </Box>
    </>
  );
}
