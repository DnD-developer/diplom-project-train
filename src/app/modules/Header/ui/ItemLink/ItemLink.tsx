// interface
import { ItemLinkProps } from "@/app/modules/Header/ui/ItemLink/ItemLink.interface"
// styles
import styles from "@/app/modules/Header/ui/ItemLink/ItemLink.module.scss"

export function ItemLink({ link }: ItemLinkProps) {
	return (
		<li className={styles.item}>
			<a
				href={link.url}
				className={styles.itemLink}>
				{link.text}
			</a>
		</li>
	)
}
