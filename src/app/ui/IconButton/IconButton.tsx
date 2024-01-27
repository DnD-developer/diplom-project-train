// hooks
import { useState } from "react"
// icons
import {
	ArrowTop,
	PlusScuare,
	MinusScuare,
	PlusCercle,
	MinusCercle,
	Switch
} from "@/constants/icons"
// styles
import styles from "@/app/ui/IconButton/IconButton.module.scss"
// interfaces
import {
	IconButtonProps,
	IconButtonSettings,
	typeIconButton
} from "@/app/ui/IconButton/IconButton.interface"

export function IconButton({ type, onClick }: IconButtonProps) {
	const [active, setActive] = useState(false)

	const settings: IconButtonSettings = {
		selectIcon: ArrowTop,
		clickStateSelectIcon: ArrowTop,
		classes: styles.icon
	}

	switch (type) {
		case typeIconButton.plusSquare: {
			settings.selectIcon = PlusScuare
			settings.classes += ` ${styles.plusScuare}`
			settings.clickStateSelectIcon = MinusScuare
			break
		}
		case typeIconButton.arrowTop: {
			settings.selectIcon = ArrowTop
			settings.classes += ` ${styles.arrowTop}`
			settings.clickStateSelectIcon = ArrowTop
			break
		}
		case typeIconButton.plusCircle: {
			settings.selectIcon = PlusCercle
			settings.classes += ` ${active ? styles.minusCercle : styles.plusCircle}`
			settings.clickStateSelectIcon = MinusCercle
			break
		}
		case typeIconButton.switch: {
			settings.selectIcon = Switch
			settings.classes += ` ${styles.switch}`
			settings.clickStateSelectIcon = Switch
			break
		}
		default:
			break
	}

	const onClickHandler = () => {
		setActive(!active)
		onClick(active)
	}

	return (
		<button
			type="button"
			onClick={onClickHandler}
			className={styles.iconWrapper}>
			{active ? (
				<settings.clickStateSelectIcon className={settings.classes} />
			) : (
				<settings.selectIcon className={settings.classes} />
			)}
		</button>
	)
}
