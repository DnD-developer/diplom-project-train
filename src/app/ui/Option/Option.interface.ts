import { typeOption } from "@/types/enums"

export interface optionProps {
	type: typeOption
	choice: boolean
	active?: boolean
	onClick: () => void
	textPrompt: string
}
