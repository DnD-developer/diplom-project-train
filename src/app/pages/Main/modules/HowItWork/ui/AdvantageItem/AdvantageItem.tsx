// styles
import styles from "@/app/pages/Main/modules/HowItWork/ui/AdvantageItem/AdbvantageItem.module.scss"
// interface
import { AdvantageItemProps } from "@/app/pages/Main/modules/HowItWork/ui/AdvantageItem/AdvantageItem.interface"

export function AdvantageItem({ advantage }: AdvantageItemProps) {
	return (
		<li className={styles.item}>
			<img
				src={advantage.icon}
				className={styles.img}
				alt=""
			/>
			<h3 className={styles.text}>{advantage.text}</h3>
		</li>
	)
}
