// styles
import styles from "@/app/modules/BreadCrumbs/components/List/List.module.scss"
// interface
import { ListProps } from "@/app/modules/BreadCrumbs/components/List/List.interface"
// components
import { Item } from "@/app/modules/BreadCrumbs/ui/Item"

export function List({ items }: ListProps) {
	return (
		<ul className={styles.list}>
			{items.map(({ link, title }, i) => (
				<Item
					key={i}
					number={i + 1}
					title={title}
					link={link}
				/>
			))}
		</ul>
	)
}
