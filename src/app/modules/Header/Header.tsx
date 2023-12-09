// constants
import { linksOfRoutes } from "@/app/modules/Header/constants/linksOfRoutes"
// components
import { ItemLinks } from "@/app/modules/Header/components/ItemLinks"
import { Logo } from "@/app/ui/Logo"
// styles
import styles from "@/app/modules/Header/Header.module.scss"

export function Header() {
	return (
		<div className="header">
			<div className="container">
				<div className={styles.logoWrapper}>
					<Logo mainLink={process.env.MAIN_PAGE} />
				</div>
			</div>
			<div className={styles.listWrapper}>
				<div className="container">
					<ItemLinks links={linksOfRoutes} />
				</div>
			</div>
		</div>
	)
}
