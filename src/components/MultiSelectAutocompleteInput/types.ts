export type OptionType = {
  label: string;
  value: number;
  renderedItem: React.ReactElement;
};
export type MultiSelectAutoCompleteInputProps = {
  options: Array<OptionType>;
  onChangeInput: (param: string) => void;
  isLoading: boolean;
};
export type SelectedOptionsProps = {
  selectOption: (o: OptionType, cursor: boolean) => void;
  selectedOptions: Array<OptionType>;
};
export type FilteredOptionsProps = {
  filteredOptions: Array<OptionType>;
  selectedOptions: Array<OptionType>;
  selectOption: (o: OptionType) => void;
};
