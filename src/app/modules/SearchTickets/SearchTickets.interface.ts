// utils
import { PropsWithChildren } from "react"

export interface SearchTicketsProps extends PropsWithChildren {
	background: string
	type?: "default" | "horizontal"
}
