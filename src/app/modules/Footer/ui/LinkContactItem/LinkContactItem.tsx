// styles
import styles from "@/app/modules/Footer/ui/LinkContactItem/LinkContactItem.module.scss"
// interfaces
import { LinkContactItemProps } from "@/app/modules/Footer/ui/LinkContactItem/LinkContactItem.interface"
import { typeHyperLink } from "@/app/modules/Footer/constants/contactLinks"

export function LinkContactItem({ contactLink }: LinkContactItemProps) {
	const { Icon, url, title, type } = contactLink
	let prefixLink: "tel: " | "mailto: " | "skype: " | ""

	switch (type) {
		case typeHyperLink.phone: {
			prefixLink = "tel: "
			break
		}

		case typeHyperLink.mail: {
			prefixLink = "mailto: "
			break
		}
		case typeHyperLink.skype: {
			prefixLink = "skype: "
			break
		}

		default:
			prefixLink = ""
	}

	return (
		<li className={styles.link}>
			<a href={`${prefixLink}${url}`}>
				<Icon className={styles.linkIcon} />
			</a>
			<a
				href={`${prefixLink}${url}`}
				className={styles.linkText}>
				{title}
			</a>
		</li>
	)
}
