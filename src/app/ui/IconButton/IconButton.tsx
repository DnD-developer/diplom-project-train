// hooks
import { useState } from "react"
// icons
import { ArrowTop, PlusScuare, MinusScuare, PlusCercle, MinusCercle } from "@/constants/icons"
// styles
import styles from "@/app/ui/IconButton/IconButton.module.scss"
// intrface
import { typeIconButton } from "@/types/enums"
import { IconButtonProps, IconButtonSettings } from "@/app/ui/IconButton/IconButton.interface"

export function IconButton({ type, onClick }: IconButtonProps) {
	const [active, setActive] = useState(false)

	const settings: IconButtonSettings = {
		selectIcon: ArrowTop,
		clickStateSelectIcon: ArrowTop,
		classes: ""
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
