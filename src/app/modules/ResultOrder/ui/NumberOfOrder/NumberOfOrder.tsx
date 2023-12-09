// styles
import styles from "@/app/modules/ResultOrder/ui/NumberOfOrder/NumberOfOrder.module.scss"
// interfaces
import { NumberOfOrderProps } from "@/app/modules/ResultOrder/ui/NumberOfOrder/NumberOfOrder.interface"

export function NumberOfOrder({ numberOfOrder }: NumberOfOrderProps) {
	return <h2 className={styles.title}>№Заказа {numberOfOrder}</h2>
}
