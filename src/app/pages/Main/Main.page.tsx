// modules
import { Header, linksOfRoutes } from "@/app/modules/Header"
import { Footer } from "@/app/modules/Footer"
import { About } from "@/app/pages/Main/modules/About"
import { HowItWork } from "@/app/pages/Main/modules/HowItWork"
import { Reviews } from "@/app/pages/Main/modules/Reviews"
import { SearchTickets } from "@/app/modules/SearchTickets"
// interfaces
import { PagesProps } from "@/app/pages/pages.interface"

export function MainPage({ background }: PagesProps) {
	return (
		<>
			<div className="content">
				<SearchTickets background={background}>
					<Header />
				</SearchTickets>
				<About
					id={linksOfRoutes[0].url}
					title={linksOfRoutes[0].text}
				/>
				<HowItWork
					id={linksOfRoutes[1].url}
					title={linksOfRoutes[1].text}
				/>
				<Reviews
					id={linksOfRoutes[2].url}
					title={linksOfRoutes[2].text}
				/>
			</div>
			<Footer />
		</>
	)
}
