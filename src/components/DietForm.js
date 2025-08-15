import React, { useState } from "react";
import {
  Box, TextField, Select, MenuItem, FormControl, InputLabel, Button, Typography
} from "@mui/material";
import axios from "axios";

export default function DietForm({ onResult }) {
  const [form, setForm] = useState({
    weight: "", height: "", age: "", gender: "male", activityLevel: "moderate"
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/diet-plan", form);
      onResult(res.data);
    } catch (err) {
      alert("Error generating diet plan");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
      gap: 2, p: 4, borderRadius: 3,
      boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
      background: "linear-gradient(135deg, #fce4ec 0%, #f3e5f5 100%)"
    }}>
      <Typography variant="h5" sx={{
        gridColumn: "1 / -1", textAlign: "center", fontWeight: "bold",
        color: "#880e4f", mb: 2
      }}>
        🥗 Personalized Diet Plan
      </Typography>

      <TextField name="weight" label="Weight (kg)" value={form.weight} onChange={handleChange} fullWidth sx={{ background: "#fff", borderRadius: 2 }} />
      <TextField name="height" label="Height (cm)" value={form.height} onChange={handleChange} fullWidth sx={{ background: "#fff", borderRadius: 2 }} />
      <TextField name="age" label="Age" value={form.age} onChange={handleChange} fullWidth sx={{ background: "#fff", borderRadius: 2 }} />

      <FormControl fullWidth sx={{ background: "#fff", borderRadius: 2 }}>
        <InputLabel>Gender</InputLabel>
        <Select name="gender" value={form.gender} onChange={handleChange}>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ background: "#fff", borderRadius: 2 }}>
        <InputLabel>Activity Level</InputLabel>
        <Select name="activityLevel" value={form.activityLevel} onChange={handleChange}>
          <MenuItem value="sedentary">Sedentary</MenuItem>
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="moderate">Moderate</MenuItem>
          <MenuItem value="active">Active</MenuItem>
        </Select>
      </FormControl>

      <Box sx={{ gridColumn: "1/-1", textAlign: "center", mt: 2 }}>
        <Button type="submit" variant="contained" sx={{
          background: "linear-gradient(45deg, #ad1457, #d81b60)",
          color: "#fff", px: 4, py: 1.2, fontWeight: "bold", borderRadius: 3,
          "&:hover": { background: "linear-gradient(45deg, #880e4f, #c2185b)" }
        }}>
          Generate Plan
        </Button>
      </Box>
    </Box>
  );
}
