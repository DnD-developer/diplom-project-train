// utils
import { useState, FC, SVGProps } from "react"
// interfaces
import { optionProps, typeOption } from "@/app/ui/Option/Option.interface"
// icons
import { Wifi, Climat, Tea, UnderWear } from "@/constants/icons"
// styles
import styles from "@/app/ui/Option/Option.module.scss"

export function Option({ type, choice, active = true, onClick, textPrompt }: optionProps) {
	const [_choice, _setChoice] = useState(choice)

	const onClickHandler = () => {
		if (active) {
			_setChoice(!_choice)
			onClick()
		}
	}

	let Icon: FC<SVGProps<SVGSVGElement>> = Wifi
	let classesIcon = styles.wrapper

	switch (type) {
		case typeOption.climat:
			Icon = Climat
			break
		case typeOption.tea:
			Icon = Tea
			break
		case typeOption.underwear:
			Icon = UnderWear
			break
		case typeOption.wifi:
			Icon = Wifi
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
