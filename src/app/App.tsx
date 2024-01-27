// utils
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// backgorunds
import { mainPageBg, endPageBg, SearchBg } from "@/constants/backgrounds"
// pages
import { MainPage } from "@/app/pages/Main"
import { EndPage } from "@/app/pages/End"
import { TicketsPage } from "@/app/pages/Tickets"

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
			path: process.env.TICKETS_PAGE,
			element: <TicketsPage background={SearchBg} />
		}
	])
	return <RouterProvider router={router} />
}
