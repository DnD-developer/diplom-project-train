// utils
import { Link } from "react-router-dom"
// styles
import styles from "@/app/pages/End/modules/ResultOrder/components/ManipulateAfterOrder/ManipulateAfterOrder.module.scss"
// interfaces
import { ManipulateAfterOrderProps } from "@/app/pages/End/modules/ResultOrder/components/ManipulateAfterOrder/ManipulateAfterOrder.interface"

export function ManipulateAfterOrder({ children }: ManipulateAfterOrderProps) {
	return (
		<div className={styles.wrapper}>
			{children}
			<Link
				to={process.env.MAIN_PAGE}
				className={styles.link}>
				Вернуться на главную
			</Link>
		</div>
	)
}
