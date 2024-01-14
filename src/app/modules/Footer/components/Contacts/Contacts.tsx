// styles
import styles from "@/app/modules/Footer/components/Contacts/Contacts.module.scss"
// components
import { LinkContactItem } from "@/app/modules/Footer/ui/LinkContactItem"
// innterface
import { ContactsProps } from "@/app/modules/Footer/components/Contacts/Contacts.interface"

export function Contacts({ contactLinks }: ContactsProps) {
	return (
		<>
			<h2 className={styles.title}>Свяжитесь с нами</h2>
			<ul className={styles.list}>
				{contactLinks.map(contactLink => (
					<LinkContactItem
						key={contactLink.url}
						contactLink={contactLink}
					/>
				))}
			</ul>
		</>
	)
}
