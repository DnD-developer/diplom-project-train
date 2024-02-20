export interface navigationLink {
	title: string
	link: string
}

export const navigation: navigationLink[] = [
	{ title: "Билеты", link: process.env.TICKETS_PAGE },
	{
		title: "Пассажиры",
		link: `${process.env.TICKETS_PAGE}${process.env.PASSENGERS_PAGE}`
	},
	{
		title: "Оплата",
		link: `${process.env.TICKETS_PAGE}${process.env.PASSENGERS_PAGE}${process.env.PAY_PAGE}`
	},
	{
		title: "Проверка",
		link: `${process.env.TICKETS_PAGE}${process.env.PASSENGERS_PAGE}${process.env.PAY_PAGE}${process.env.CHECK_PAGE}`
	}
]
