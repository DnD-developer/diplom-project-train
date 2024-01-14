// icons
import { saveTicketsIcon, showTickets, willSendEmailIcon } from "@/constants/images"

export interface instructionType {
	boldSubText: string
	text: string
	icon: string
}

export const instructions: instructionType[] = [
	{
		text: "билеты будут отправлены на ваш e-mail",
		boldSubText: "e-mail",
		icon: willSendEmailIcon
	},
	{
		text: "распечатайте и сохраняйте билеты до даты поездки",
		icon: saveTicketsIcon,
		boldSubText: "распечатайте"
	},
	{
		text: "предьявите распечатанны билеты при посадке",
		icon: showTickets,
		boldSubText: "предьявите"
	}
]
