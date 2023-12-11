import { FC, SVGProps } from "react"

export enum typeIconButton {
	plusCircle,
	plusSquare,
	arrowTop
}

export interface IconButtonProps {
	type: typeIconButton
	onClick: (state: boolean) => void
}

export interface IconButtonSettings {
	selectIcon: FC<SVGProps<SVGSVGElement>>
	clickStateSelectIcon: FC<SVGProps<SVGSVGElement>>
	classes: string
}
