import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

const cities = [
  { label: "Kocaeli", value: 41 },
  { label: "İstanbul", value: 34 },
  { label: "Rize", value: 53 },
];

export default function SelectUsage() {
  const [city, setCity] = useState(41);
  function handleChange(e) {
    setCity(e.target.value);
  }
  return (
    <Box width="300px">
      <TextField
        label="Select City"
        value={city}
        onChange={handleChange}
        select
        fullWidth
      >
        {/* <MenuItem value="41">Kocaeli</MenuItem>
        <MenuItem value="01">Adana</MenuItem>
        <MenuItem value="38">İstanbul</MenuItem> */}

        {cities.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
