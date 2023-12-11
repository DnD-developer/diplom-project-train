// styles
import styles from "@/app/modules/Footer/Footer.module.scss"
// constants
import { contactLinks } from "@/app/modules/Footer/constants/contactLinks"
import { socialLinks } from "@/app/modules/Footer/constants/socialLinks"
// components
import { Contacts } from "@/app/modules/Footer/components/Contacts"
import { Subscribtion } from "@/app/modules/Footer/components/Subscibtion"
import { SubscribtionSocials } from "@/app/modules/Footer/components/SubscribtionSocials"
import { UnderFooter } from "@/app/modules/Footer/components/UnderFooter"

export function Footer() {
	return (
		<div className={`footer ${styles.footer}`}>
			<div className={styles.container}>
				<div>
					<Contacts contactLinks={contactLinks} />
				</div>

				<div>
					<Subscribtion />
					<SubscribtionSocials links={socialLinks} />
				</div>
			</div>
			<div className={styles.downFooter}>
				<div className="container">
					<UnderFooter />
				</div>
			</div>
		</div>
	)
}
