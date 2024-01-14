export enum typeInputInteractive {
	choiceDate,
	choiceLocation
}

export interface InputInteractiveProps {
	type: typeInputInteractive
	inputValue: string
	onChange: (inputValue: string) => void
	direction?: "whence" | "where"
	onCLick: () => void
}
