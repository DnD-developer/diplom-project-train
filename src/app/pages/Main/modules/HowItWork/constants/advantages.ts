// icons
import { Computer, Office, World } from "@/constants/images"

export interface advantageType {
	icon: string
	text: string
}

export const advantages: advantageType[] = [
	{ icon: Computer, text: "Удобный заказ на сайте" },
	{ icon: Office, text: "Нет необходимости ехать в офис" },
	{ icon: World, text: "Огромный выбор направлений" }
]
