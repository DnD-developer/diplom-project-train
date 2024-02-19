// interfaces
import { PreloaderStatusProps } from "@/app/ui/PreloaderStatus/PreloaderStatus.interface"
// styles
import styles from "@/app/ui/PreloaderStatus/PreloaderStatus.module.scss"

export function PreloaderStatus({ progress }: PreloaderStatusProps) {
	return (
		<div className={styles.line}>
			<div
				className={styles.progress}
				style={{ width: `${progress <= 100 ? progress : 100}%` }}
			/>
		</div>
	)
}
