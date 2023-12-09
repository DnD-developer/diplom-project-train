// modules
import { Header } from "@/app/modules/Header"
import { Footer } from "@/app/modules/Footer"
// interfaces
import { PagesProps } from "@/app/pages/pages.interface"

export function MainPage({ background }: PagesProps) {
	return (
		<>
			<div
				className="content"
				style={{ backgroundImage: `url(${background})` }}>
				<Header />
			</div>
			<Footer />
		</>
	)
}
