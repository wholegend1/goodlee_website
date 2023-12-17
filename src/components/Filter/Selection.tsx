import * as React from "react";
import Select, { SelectStaticProps } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import IconButton from "@mui/joy/IconButton";
import CloseRounded from "@mui/icons-material/CloseRounded";
import { Box } from "@mui/joy";
import { useFilterContext } from "@/providers/FilterContextProvider";

interface SelectionProps {
  handleSelectChange: (newValue: string | null) => void;
}
const Selection = ({ handleSelectChange }: SelectionProps) => {
  const [value, setValue] = React.useState<string | null>(null);
  const action: SelectStaticProps["action"] = React.useRef(null);
  const { countries } = useFilterContext();
  const handleChange = (event: any, newValue: string | null) => {
    setValue(newValue);
    handleSelectChange(newValue);
  };
  return (
    <Box>
      <div>國家</div>
      <Select
        action={action}
        value={value}
        placeholder="選擇國家..."
        onChange={(e, newValue) => handleChange(e, newValue)}
        {...(value && {
          endDecorator: (
            <IconButton
              size="sm"
              variant="plain"
              color="neutral"
              onMouseDown={(event) => {
                event.stopPropagation();
              }}
              onClick={(e) => {
                handleChange(e, null);
                action.current?.focusVisible();
              }}
            >
              <CloseRounded />
            </IconButton>
          ),
          indicator: null,
        })}
        sx={{ minWidth: 160 }}
      >
        {countries.map((country, index) => (
          <Option key={index} value={country}>
            {country}
          </Option>
        ))}
      </Select>
    </Box>
  );
};

export default Selection;
