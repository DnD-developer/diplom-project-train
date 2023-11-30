// utils
import React, { useState } from "react"
// styles
import styles from "./Button.module.scss"
// interfaces
import { buttonProps } from "./Button.interface"
import { typeButtons } from "../../../types/enums"

export default function Button({ text, type, onClick, hold }: buttonProps): React.JSX.Element {
	const [pressed, setPressed] = useState(false)

	let className = styles.button
	let pressedClass = ""

	if (hold) {
		className = className.concat(` ${styles.hold}`)
	}

	switch (type) {
		case typeButtons.longHighOrangeBlackFontThree:
			pressedClass = pressed ? styles.pressedTransparentOrange : styles.orangeBlack

			className = className.concat(` ${styles.long} ${styles.high} ${pressedClass}`)
			break

		case typeButtons.longHighOrangeWhiteFontFour:
			if (!hold) {
				pressedClass = pressed ? styles.pressedTransparentOrange : styles.orangeWhite
			}

			className = className.concat(` ${styles.long} ${styles.high} ${pressedClass}`)
			break

		case typeButtons.shortHighOrangeWhiteFontFour:
			if (!hold) {
				pressedClass = pressed ? styles.pressedTransparentOrange : styles.orangeWhite
			}

			className = className.concat(` ${styles.short} ${styles.high} ${pressedClass}`)
			break

		case typeButtons.shortLowOrangeWhiteFontFour:
			if (!hold) {
				pressedClass = pressed ? styles.pressedTransparentOrange : styles.orangeWhite
			}

			className = className.concat(` ${styles.short} ${styles.low} ${pressedClass}`)
			break
		case typeButtons.shorLowTransparentBlackFontThree:
			pressedClass = pressed ? styles.orangeBlack : styles.transparentBlack

			className = className.concat(` ${styles.short} ${styles.low} ${pressedClass}`)
			break
		case typeButtons.shortMiddleTransparentBlackFontThree:
			pressedClass = pressed ? styles.orangeBlack : styles.transparentBlack

			className = className.concat(` ${styles.short} ${styles.middle} ${pressedClass}`)
			break
		case typeButtons.longHighTransparentWhiteFontThree:
			pressedClass = pressed ? styles.pressedTransparentWhite : styles.transparentWhite

			className = className.concat(` ${styles.long} ${styles.high} ${pressedClass}`)
			break
		case typeButtons.shortHighTransparentWhiteFontThree:
			pressedClass = pressed ? styles.pressedTransparentWhite : styles.transparentWhite

			className = className.concat(` ${styles.short} ${styles.high} ${pressedClass} ${styles.fontThin}`)
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
