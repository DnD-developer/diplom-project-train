// styles
import styles from "@/app/modules/ResultOrder/components/TextForClient/TextForClient.module.scss"
// interfaces
import { TextForClientProps } from "@/app/modules/ResultOrder/components/TextForClient/TextForClient.interface"

export function TextForClient({ nameClient }: TextForClientProps) {
	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>{nameClient}</h3>
			<p className={styles.text}>
				Ваш заказ успешно оформлен.
				<br />В ближайшее время с вами свяжется наш оператор для подтверждения.
			</p>
			<p className={styles.underText}>
				Благодарим Вас за оказанное доверие и желаем приятного путешествия!
			</p>
		</div>
	)
}
