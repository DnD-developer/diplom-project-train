// styles
import styles from "@/app/modules/Footer/components/SubscribtionSocials/SubscribtionSocial.module.scss"
// interfaces
import { SubscribtionSocialsProps } from "@/app/modules/Footer/components/SubscribtionSocials/SubscribtionSocials.interface"
// components
import { LinkSocialItem } from "@/app/modules/Footer/ui/LinkSocialItem"

export function SubscribtionSocials({ links }: SubscribtionSocialsProps) {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Подписывайтесь на нас</h2>
			<ul className={styles.list}>
				{links.map(link => (
					<LinkSocialItem
						key={link.url}
						link={link}
					/>
				))}
			</ul>
		</div>
	)
}
