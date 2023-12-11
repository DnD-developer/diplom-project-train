// icons
import Trains from "@/app/assets/icons/train.svg"
// interfaces
import { PreloaderProps } from "./Preloader.interface"
// styles
import styles from "./Preloader.module.scss"

export default function Preloader({ title, active }: PreloaderProps) {
	if (!active) {
		return null
	}

	return (
		<div className={styles.wrapper}>
			<p className={styles.preloaderTitle}>{title}</p>
			<div className={styles.wrapperAnimation}>
				<Trains className={styles.preloaderIcon} />
				<div className={styles.preloaderLine} />
			</div>
		</div>
	)
}
