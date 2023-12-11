// interface
import { ItemLinksProps } from "@/app/modules/Header/components/ItemLinks/ItemLinks.interface"
// components
import { ItemLink } from "@/app/modules/Header/ui/ItemLink"
// styles
import styles from "@/app/modules/Header/components/ItemLinks/ItemLinks.module.scss"

export function ItemLinks({ links }: ItemLinksProps) {
	return (
		<div>
			<ul className={styles.list}>
				{links.map(link => (
					<ItemLink
						key={link.url}
						link={link}
					/>
				))}
			</ul>
		</div>
	)
}
