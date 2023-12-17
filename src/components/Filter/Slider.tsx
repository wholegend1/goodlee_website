import Box from "@mui/joy/Box";
import Slider from "@mui/joy/Slider";
import * as React from "react";
import debounce from "lodash.debounce";
import { useFilterContext } from "@/providers/FilterContextProvider";
interface SliderProps {
  handleSliderChange: (newValue: [number, number]) => void;
}
function valueText(value: number) {
  return `${value}`;
}

export default function RangeSlider({ handleSliderChange }: SliderProps) {
  const [value, setValue] = React.useState<number[]>([20, 30]);
  const { minAge, maxAge } = useFilterContext();

  const min = minAge > 18 ? minAge : 18;
  const max = maxAge < 50 ? maxAge : 60;

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    debouncedInputChange(newValue as [number, number]);
  };
  const debouncedInputChange = debounce(handleSliderChange, 2000);
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
