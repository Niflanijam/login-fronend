import React from "react";
import { Box, Card, CardContent, Typography, Divider, List, ListItem, ListItemText } from "@mui/material";

export default function DietResult({ calories, meals }) {
  if (!calories || !meals) return null;

  return (
    <Box sx={{ mt: 4 }}>
      <Card sx={{
        boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        borderRadius: 3,
        background: "linear-gradient(135deg, #fffde7 0%, #fff8e1 100%)"
      }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#ef6c00", mb: 2, textAlign: "center" }}>
            🔥 Daily Calorie Needs: {calories} kcal
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#6a1b9a", mb: 1 }}>
            🥗 One-Day Meal Plan
          </Typography>

          <List>
            {meals.map((meal, idx) => (
              <ListItem key={idx} sx={{ p: 0.5 }}>
                <ListItemText primary={
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {meal.label} - {meal.calories.toFixed(0)} kcal
                  </Typography>
                } />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
