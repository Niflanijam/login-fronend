import React, { useState } from "react";
import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";
import DietResult from "./DietResult";
import axios from "axios";

export default function DietForm() {
  const [form, setForm] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "",
    activityLevel: "sedentary",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/diet-plan", form);
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Error generating diet plan");
    }
  };

  return (
    /*
    <Box sx={{ width: "80%", mx: "auto", mt: 5 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 4, textAlign: "center", color: "#ad1457" }}
      >
        🥗 Personalized Diet Planner
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Weight (kg)"
          name="weight"
          value={form.weight}
          onChange={handleChange}
          type="number"
          sx={{ mb: 3 }}
          required
        />
        <TextField
          fullWidth
          label="Height (cm)"
          name="height"
          value={form.height}
          onChange={handleChange}
          type="number"
          sx={{ mb: 3 }}
          required
        />
        <TextField
          fullWidth
          label="Age"
          name="age"
          value={form.age}
          onChange={handleChange}
          type="number"
          sx={{ mb: 3 }}
          required
        />
        <TextField
          select
          fullWidth
          label="Gender"
          name="gender"
          value={form.gender}
          onChange={handleChange}
          sx={{ mb: 3 }}
          required
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </TextField>
        <TextField
          select
          fullWidth
          label="Activity Level"
          name="activityLevel"
          value={form.activityLevel}
          onChange={handleChange}
          sx={{ mb: 4 }}
        >
          <MenuItem value="sedentary">Sedentary</MenuItem>
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="moderate">Moderate</MenuItem>
          <MenuItem value="active">Active</MenuItem>
        </TextField>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ py: 1.5, fontSize: "1rem" }}
        >
          Generate Diet Plan
        </Button>
      </form>

      <DietResult result={result} />
    </Box>*/

    <Box sx={{ width: "60%", mx: "auto", mt: 5 }}>
  <Typography
    variant="h4"
    sx={{ fontWeight: "bold", mb: 4, textAlign: "center", color: "#ad1457" }}
  >
    🥗 Personalized Diet Planner
  </Typography>

  <form onSubmit={handleSubmit}>
    <TextField
      fullWidth
      label="Weight (kg)"
      name="weight"
      value={form.weight}
      onChange={handleChange}
      type="number"
      sx={{ mb: 3 }}
      required
    />
    <TextField
      fullWidth
      label="Height (cm)"
      name="height"
      value={form.height}
      onChange={handleChange}
      type="number"
      sx={{ mb: 3 }}
      required
    />
    <TextField
      fullWidth
      label="Age"
      name="age"
      value={form.age}
      onChange={handleChange}
      type="number"
      sx={{ mb: 3 }}
      required
    />
    <TextField
      select
      fullWidth
      label="Gender"
      name="gender"
      value={form.gender}
      onChange={handleChange}
      sx={{ mb: 3 }}
      required
    >
      <MenuItem value="male">Male</MenuItem>
      <MenuItem value="female">Female</MenuItem>
    </TextField>
    <TextField
      select
      fullWidth
      label="Activity Level"
      name="activityLevel"
      value={form.activityLevel}
      onChange={handleChange}
      sx={{ mb: 4 }}
    >
      <MenuItem value="sedentary">Sedentary</MenuItem>
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="moderate">Moderate</MenuItem>
      <MenuItem value="active">Active</MenuItem>
    </TextField>
    <Button
      type="submit"
      variant="contained"
      color="secondary"
      fullWidth
      sx={{ py: 1.5, fontSize: "1rem" }}
    >
      Generate Diet Plan
    </Button>
  </form>

  <DietResult result={result} />
</Box>

  );
}
