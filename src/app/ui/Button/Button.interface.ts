import { typeButton } from "../../../types/enums"

export interface buttonProps {
	text: string
	type: typeButton
	onClick: () => void
	hold?: boolean
}
