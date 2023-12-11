export enum linkUrlType {
	about = "about",
	howItWork = "howItWork",
	review = "review",
	end = "end"
}

export interface linkType {
	text: string
	url: linkUrlType
}

export const linksOfRoutes: linkType[] = [
	{ text: "О нас", url: linkUrlType.about },
	{ text: "Как это работает", url: linkUrlType.howItWork },
	{ text: "Отзывы", url: linkUrlType.review },
	{ text: "Контакты", url: linkUrlType.end }
]
