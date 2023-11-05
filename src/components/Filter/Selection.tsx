import * as React from "react";
import Select, { SelectStaticProps } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import IconButton from "@mui/joy/IconButton";
import CloseRounded from "@mui/icons-material/CloseRounded";
import { Box } from "@mui/joy";
import data from "../../app/data"; // 將您的數據文件引入這裡

interface DataItem {
  id: number;
  avatar: string;
  name: string;
  age: number;
  country: string;
  education: string;
}

const Selection: React.FC = () => {
  const [value, setValue] = React.useState<string | null>(null);
  const action: SelectStaticProps["action"] = React.useRef(null);
  const countries: string[] = Array.from(
    new Set(data.map((item: DataItem) => item.country))
  ); // 從數據中提取獨特的國家

  return (
    <Box>
      <div>國家</div>
      <Select
        action={action}
        value={value}
        placeholder="選擇國家..."
        onChange={(e, newValue) => setValue(newValue)}
        {...(value && {
          endDecorator: (
            <IconButton
              size="sm"
              variant="plain"
              color="neutral"
              onMouseDown={(event) => {
                event.stopPropagation();
              }}
              onClick={() => {
                setValue(null);
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
