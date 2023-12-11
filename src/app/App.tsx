// utils
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// backgorunds
import { mainPageBg, endPageBg } from "@/constants/backgrounds"
// pages
import { MainPage } from "@/app/pages/Main"
import { EndPage } from "@/app/pages/End"

export default function App() {
	const router = createBrowserRouter([
		{
			path: process.env.MAIN_PAGE,
			element: <MainPage background={mainPageBg} />
		},
		{
			path: process.env.END_PAGE,
			element: <EndPage background={endPageBg} />
		}
	])
	return <RouterProvider router={router} />
}
