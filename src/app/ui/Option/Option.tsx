// utils
import { useState, FC, SVGProps } from "react"
// interfaces
import { optionProps } from "@/app/ui/Option/Option.interface"
import { typeOption } from "@/types/enums"
// icons
import wifi from "@/app/assets/icons/wifi-icon.svg"
import climat from "@/app/assets/icons/climat-icon.svg"
import tea from "@/app/assets/icons/tea-icon.svg"
import underwear from "@/app/assets/icons/underwear-icon.svg"
// styles
import styles from "@/app/ui/Option/Option.module.scss"

export default function Option({ type, choice, active = true, onClick, textPrompt }: optionProps) {
	const [_choice, _setChoice] = useState(choice)

	const onClickHandler = () => {
		if (active) {
			_setChoice(!_choice)
			onClick()
		}
	}

	let Icon: FC<SVGProps<SVGSVGElement>> = wifi
	let classesIcon = styles.wrapper

	switch (type) {
		case typeOption.climat:
			Icon = climat
			break
		case typeOption.tea:
			Icon = tea
			break
		case typeOption.underwear:
			Icon = underwear
			break
		case typeOption.wifi:
			Icon = wifi
			break
		default:
			break
	}

	if (_choice && active) {
		classesIcon = classesIcon.concat(` ${styles.wrapperUnchoice}`)
	}

	if (_choice && !active) {
		classesIcon = classesIcon.concat(` ${styles.wrapperChoiceNotActive}`)
	}

	if (!_choice && active) {
		classesIcon = classesIcon.concat(` ${styles.wrapperUnchoice}`)
	}

	return (
		<button
			className={classesIcon}
			type="button"
			onClick={onClickHandler}>
			<span>{textPrompt}</span>
			<Icon className={styles.icon} />
		</button>
	)
}
