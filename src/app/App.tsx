// utils
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// pages
import { MainPage } from "@/app/pages/Main"

export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <MainPage />
		}
	])
	return <RouterProvider router={router} />
}
