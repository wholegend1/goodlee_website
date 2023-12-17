import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Stack from "@mui/joy/Stack";
import debounce from "lodash.debounce";
interface SearchProps {
  handleSearchChange: (newValue: string | null) => void;
}

export default function SearchBox({ handleSearchChange }: SearchProps) {
  const debouncedHandleSearchChange = debounce(handleSearchChange, 2000);
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <FormControl id="free-solo-2-demo">
        <FormLabel>搜尋人力名稱或仲介公司:</FormLabel>
        <input
          className="block w-full p-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
          type="search"
          onChange={(event) => {
            if (event.target.value === null || event.target.value === "") {
              debouncedHandleSearchChange(null);
            } else {
              debouncedHandleSearchChange(event.target.value);
            }
          }}
        />
      </FormControl>
    </Stack>
  );
}
