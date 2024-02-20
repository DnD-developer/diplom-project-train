// interfaces
import { PagesProps } from "@/app/pages/pages.interface"
// modules
import { Header } from "@/app/modules/Header"
import { Footer } from "@/app/modules/Footer"
import { SearchTickets } from "@/app/modules/SearchTickets"
import { BreadCrumbs, navigation } from "@/app/modules/BreadCrumbs"

export function PayPage({ background }: PagesProps) {
	return (
		<>
			<div className="content">
				<SearchTickets
					background={background}
					type="horizontal">
					<Header />
				</SearchTickets>
				<BreadCrumbs items={navigation} />
			</div>
			<Footer />
		</>
	)
}
