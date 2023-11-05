import Box from "@mui/joy/Box";
import Slider from "@mui/joy/Slider";
import * as React from "react";

function valueText(value: number) {
  return `${value}`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([20, 37]);
  const min = 18; 
  const max = 50; 

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <div>年齡:</div>
      <Slider
        getAriaLabel={() => "Age range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valueText}
        min={min}
        max={max}
      />
    </Box>
  );
}
