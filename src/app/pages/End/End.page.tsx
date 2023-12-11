// interfaces
import { PagesProps } from "@/app/pages/pages.interface"
// modules
import { Header } from "@/app/modules/Header"
import { Footer } from "@/app/modules/Footer"
import { ResutOrder } from "@/app/pages/End/modules/ResultOrder"

export function EndPage({ background }: PagesProps) {
	return (
		<>
			<div
				className="content"
				style={{ backgroundImage: `url(${background})` }}>
				<Header />
				<div className="container">
					<ResutOrder
						orderInfo={{
							numberOfOrder: "285АА",
							price: 7760,
							nameClient: "ирина эдуардовна"
						}}
					/>
				</div>
			</div>
			<Footer />
		</>
	)
}
