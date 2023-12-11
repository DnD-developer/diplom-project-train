// interfaces
import { LinkSocialItemProps } from "@/app/modules/Footer/ui/LinkSocialItem/LinkSocialItem.interface"
// styles
import styles from "@/app/modules/Footer/ui/LinkSocialItem/LinkSocialItem.module.scss"

export function LinkSocialItem({ link }: LinkSocialItemProps) {
	const { url, Icon } = link
	return (
		<li className={styles.linkItem}>
			<a
				href={url}
				className={styles.link}>
				<Icon className={styles.linkIcon} />
			</a>
		</li>
	)
}
