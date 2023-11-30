import { typeButtons } from "../../../types/enums"

export interface buttonProps {
	text: string
	type: typeButtons
	onClick: () => void
	hold?: boolean
}
