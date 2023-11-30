// hooks
import { useState } from "react"
// icons
import PlusScuare from "@/app/assets/icons/plusScuare.svg"
import MinusScuare from "@/app/assets/icons/minusScuare.svg"
import PlusCercle from "@/app/assets/icons/plusCercle.svg"
import ArrowTop from "@/app/assets/icons/arrowTop.svg"
import MinusCercle from "@/app/assets/icons/minusCercle.svg"
// styles

import styles from "./IconButton.module.scss"
// intrface
import { IconButtonProps, IconButtonSettings } from "./IconButton.interface"
import { typeIconButton } from "../../../types/enums"

export default function IconButton({ type, onClick }: IconButtonProps) {
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
