import { typeInputInteractive } from "../../../types/enums"

export interface InputInteractiveProps {
	type: typeInputInteractive
	inputValue: string
	onChange: (inputValue: string) => void
	direction?: "whence" | "where"
	onCLick: () => void
}
