// styles
import styles from "@/app/modules/Footer/components/UnderFooter/UnderFooter.module.scss"
// components
import { Logo } from "@/app/ui/Logo"
import { IconButton, typeIconButton } from "@/app/ui/IconButton"

export function UnderFooter() {
	const onClick = () => {
		console.log("Поехали на верх")
	}
	return (
		<div className={styles.wrapper}>
			<Logo mainLink={process.env.MAIN_PAGE} />
			<IconButton
				type={typeIconButton.arrowTop}
				onClick={onClick}
			/>
			<span className={styles.span}>{`${new Date().getFullYear()} WEB`}</span>
		</div>
	)
}
