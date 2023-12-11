// styles
import styles from "@/app/pages/End/modules/ResultOrder/ui/Total/Total.module.scss"
// interface
import { TotalProps } from "@/app/pages/End/modules/ResultOrder/ui/Total/Total.interface"
// icons
import { Rub } from "@/constants/icons"

export function Total({ price }: TotalProps) {
	const priceString = price.toString()
	const priceRender: string = `${priceString.slice(0, 1)} ${priceString.slice(
		1,
		priceString.length
	)}`

	return (
		<div className={styles.totalWrapper}>
			<span className={styles.textTotal}>сумма</span>
			<span className={styles.priceTotal}>{priceRender}</span>
			<Rub className={styles.rubTotal} />
		</div>
	)
}
