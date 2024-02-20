// utils
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// backgorunds
import { mainPageBg, endPageBg, SearchBg } from "@/constants/backgrounds"
// constants
import { navigation } from "@/app/modules/BreadCrumbs"
// pages
import { MainPage } from "@/app/pages/Main"
import { EndPage } from "@/app/pages/End"
import { TicketsPage } from "@/app/pages/Tickets"
import { PassengerPage } from "@/app/pages/Passenger"
import { PayPage } from "@/app/pages/Pay"
import { CheckPage } from "@/app/pages/Check"

export default function App() {
	const router = createBrowserRouter([
		{
			path: process.env.MAIN_PAGE,
			element: <MainPage background={mainPageBg} />
		},
		{
			path: process.env.END_PAGE,
			element: <EndPage background={endPageBg} />
		},
		{
			path: navigation[0].link,
			element: <TicketsPage background={SearchBg} />
		},
		{
			path: navigation[1].link,
			element: <PassengerPage background={SearchBg} />
		},
		{
			path: navigation[2].link,
			element: <PayPage background={SearchBg} />
		},
		{
			path: navigation[3].link,
			element: <CheckPage background={SearchBg} />
		}
	])
	return <RouterProvider router={router} />
}
