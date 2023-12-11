// utils
import { useState } from "react"
// interfaces
import { buttonProps, typeButton } from "@/app/ui/Button/Button.interface"
// styles
import styles from "@/app/ui/Button/Button.module.scss"

export function Button({ text, type, onClick, hold }: buttonProps) {
	const [pressed, setPressed] = useState(false)

	let className = styles.button
	let pressedClass = ""

	if (hold) {
		className = className.concat(` ${styles.hold}`)
	}

	switch (type) {
		case typeButton.longHighOrangeBlackFontThree:
			pressedClass = pressed ? styles.pressedTransparentOrange : styles.orangeBlack

			className = className.concat(` ${styles.long} ${styles.high} ${pressedClass}`)
			break

		case typeButton.longHighOrangeWhiteFontFour:
			if (!hold) {
				pressedClass = pressed ? styles.pressedTransparentOrange : styles.orangeWhite
			}

			className = className.concat(` ${styles.long} ${styles.high} ${pressedClass}`)
			break

		case typeButton.shortHighOrangeWhiteFontFour:
			if (!hold) {
				pressedClass = pressed ? styles.pressedTransparentOrange : styles.orangeWhite
			}

			className = className.concat(` ${styles.short} ${styles.high} ${pressedClass}`)
			break

		case typeButton.shortLowOrangeWhiteFontFour:
			if (!hold) {
				pressedClass = pressed ? styles.pressedTransparentOrange : styles.orangeWhite
			}

			className = className.concat(` ${styles.short} ${styles.low} ${pressedClass}`)
			break
		case typeButton.shorLowTransparentBlackFontThree:
			pressedClass = pressed ? styles.orangeBlack : styles.transparentBlack

			className = className.concat(` ${styles.short} ${styles.low} ${pressedClass}`)
			break
		case typeButton.shortMiddleTransparentBlackFontThree:
			pressedClass = pressed ? styles.orangeBlack : styles.transparentBlack

			className = className.concat(` ${styles.short} ${styles.middle} ${pressedClass}`)
			break
		case typeButton.longHighTransparentWhiteFontThree:
			pressedClass = pressed ? styles.pressedTransparentWhite : styles.transparentWhite

			className = className.concat(` ${styles.long} ${styles.high} ${pressedClass}`)
			break
		case typeButton.shortHighTransparentWhiteFontThree:
			pressedClass = pressed ? styles.pressedTransparentWhite : styles.transparentWhite

			className = className.concat(
				` ${styles.short} ${styles.high} ${pressedClass} ${styles.fontThin}`
			)
			break

		default:
			break
	}

	const onMouseDownHandler = () => {
		if (!hold) {
			setPressed(true)
		}
	}

	const onMouseUpHandler = () => {
		if (!hold) {
			setPressed(false)
		}
	}

	return (
		<button
			type="button"
			onClick={onClick}
			onMouseDown={onMouseDownHandler}
			onMouseUp={onMouseUpHandler}
			className={className}>
			<span>{text}</span>
		</button>
	)
}
