// utils
import { FC, SVGProps } from "react"
// icons
import { Phone, Mail, Skype, Loacate } from "@/constants/icons"

export enum typeHyperLink {
	phone,
	mail,
	skype,
	default
}

export interface contactLinktype {
	Icon: FC<SVGProps<SVGSVGElement>>
	url: string
	type: typeHyperLink
	title: string
}

export const contactLinks: contactLinktype[] = [
	{ url: "+78000000000", title: "8 (800) 000 00 00", Icon: Phone, type: typeHyperLink.phone },
	{ url: "inbox@mail.ru", title: "inbox@mail.ru", Icon: Mail, type: typeHyperLink.mail },
	{ url: "tu.train.tickets", title: "tu.train.tickets", Icon: Skype, type: typeHyperLink.skype },
	{
		url: "https://yandex.ru/maps/-/CDqE4Gzl",
		title: "г.Москва ул.Московская 27-35",
		Icon: Loacate,
		type: typeHyperLink.default
	}
]
