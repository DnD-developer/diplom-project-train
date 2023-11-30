// utils
import React from "react"
// interfaces
import { PreloaderStatusProps } from "./PreloaderStatus.interface.js"
// styles
import styles from "./PreloaderStatus.module.scss"

export default function PreloaderStatus({ progress }: PreloaderStatusProps) {
	return (
		<div className={styles.line}>
			<div
				className={styles.progress}
				style={{ width: `${progress <= 100 ? progress : 100}%` }}
			/>
		</div>
	)
}
