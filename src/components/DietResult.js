import React from "react";
import { Box, Typography, Card, CardContent, Divider } from "@mui/material";

export default function DietResult({ result }) {
  if (!result) return null;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography 
        variant="h5" 
        sx={{ fontWeight: "bold", mb: 3, textAlign: "center", color: "#ad1457" }}
      >
        🥗 Your Personalized Diet Plan
      </Typography>

      <Card sx={{ mb: 3, p: 2, borderRadius: 3, boxShadow: 3, backgroundColor: "#fce4ec" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
          Daily Calories: {result.calories} kcal
        </Typography>
      </Card>

      {result.mealPlan.map((meal, index) => (
        <Card key={index} sx={{ mb: 2, borderRadius: 2, boxShadow: 2, backgroundColor: "#fff0f5" }}>
          <CardContent>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1, color: "#d81b60" }}>
              {meal.meal}
            </Typography>
            <Typography sx={{ mb: 1 }}>
              {meal.food}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {meal.calories} kcal
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
