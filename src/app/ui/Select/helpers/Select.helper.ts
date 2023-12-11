import { SelectProps } from "../Select.interface"

export function getLabel(value: SelectProps["defaultValue"], options: SelectProps["options"]) {
	return options.filter(o => o.value === value)[0].label
}
