type Option = {
	value: "price" | "time" | "duration"
	label: "времени" | "стоимости" | "длительности"
}

export interface SelectProps {
	options: Option[]
	defaultValue: Option["value"]
	onChange: (value: string) => void
}
