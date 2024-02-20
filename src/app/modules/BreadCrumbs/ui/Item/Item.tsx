// utils
import { NavLink } from "react-router-dom"
// styles
import styles from "@/app/modules/BreadCrumbs/ui/Item/Item.module.scss"
// interface
import { ItemProps } from "@/app/modules/BreadCrumbs/ui/Item/Item.interface"

export function Item({ number, title, link }: ItemProps) {
	return (
		<NavLink
			to={link}
			className={({ isActive }) =>
				isActive ? `${styles.itemLink} ${styles.itemLinkActive}` : styles.itemLink
			}>
			<div className={styles.itemCount}>
				<span>{number}</span>
			</div>
			<h2 className={styles.itemTitle}>{title}</h2>
		</NavLink>
	)
}
