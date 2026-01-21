import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Box,
  Radio,
} from "@mui/material";
import { useState } from "react";

export default function RadioButtonUsage() {
  const [value, setValue] = useState("1");
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <Box>
      <FormControl>
        <FormLabel>Eğitiminiz</FormLabel>
        <RadioGroup
          name="eğitim"
          defaultValue={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="Lise"
            value="0"
          />
          <FormControlLabel
            control={<Radio color="danger" />}
            label="Üniversite"
            value="1"
          />
          <FormControlLabel
            control={<Radio />}
            label="Yüksek Lisans"
            value="2"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
