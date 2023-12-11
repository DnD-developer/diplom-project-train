export enum typeOption {
	wifi,
	tea,
	underwear,
	climat
}

export interface optionProps {
	type: typeOption
	choice: boolean
	active?: boolean
	onClick: () => void
	textPrompt: string
}
