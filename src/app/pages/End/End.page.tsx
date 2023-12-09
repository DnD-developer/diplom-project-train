// interfaces
import { PagesProps } from "@/app/pages/pages.interface"
// constants
import { instructions } from "@/app/modules/ResultOrder/constants/instructions"
// modules
import { Header } from "@/app/modules/Header"
import { Footer } from "@/app/modules/Footer"
import { ResutOrder } from "@/app/modules/ResultOrder"

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
							instructions,
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
