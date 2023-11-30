import { FC, SVGProps } from "react"
import { typeIconButton } from "../../../types/enums"

export interface IconButtonProps {
	type: typeIconButton
	onClick: (state: boolean) => void
}

export interface IconButtonSettings {
	selectIcon: FC<SVGProps<SVGSVGElement>>
	clickStateSelectIcon: FC<SVGProps<SVGSVGElement>>
	classes: string
}
