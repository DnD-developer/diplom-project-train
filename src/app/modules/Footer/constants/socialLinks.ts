// utils
import { FC, SVGProps } from "react"
// icons
import { Youtube, Linkden, Google, Facebook, Twitter } from "@/constants/icons"

export interface socialLinkType {
	Icon: FC<SVGProps<SVGSVGElement>>
	url: string
}

export const socialLinks: socialLinkType[] = [
	{ url: "https://www.youtube.com", Icon: Youtube },
	{ url: "https://ru.linkedin.com", Icon: Linkden },
	{ url: "https://www.google.com", Icon: Google },
	{ url: "https://www.facebook.com", Icon: Facebook },
	{ url: "https://twitter.com", Icon: Twitter }
]
