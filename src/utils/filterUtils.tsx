// filterUtils.ts

export const applyFilters = (data: any[], selectedFilters: any) => {
  const { selectFilter, searchValue, sliderValue } = selectedFilters;

  // Apply filtering based on selectFilter
  let updatedData = data;
  if (selectFilter) {
    updatedData = updatedData.filter((item) => item.country === selectFilter);
  }

  // Apply filtering based on name search
  if (searchValue) {
    updatedData = updatedData.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  // Apply filtering based on age range
  if (sliderValue[0] !== undefined && sliderValue[1] !== undefined) {
    updatedData = updatedData.filter(
      (item) => item.age >= sliderValue[0] && item.age <= sliderValue[1]
    );
  }

  return updatedData;
};
