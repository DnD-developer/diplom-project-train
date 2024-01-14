// utils
import { ChangeEvent } from "react"
// icons
import { Locate, Calendar } from "@/constants/icons"
// interfaces
import {
	InputInteractiveProps,
	typeInputInteractive
} from "@/app/ui/InputInteractive/InputInteractive.interface"
// styles
import styles from "@/app/ui/InputInteractive/InputInteractive.module.scss"

export function InputInteractive({
	type,
	onChange,
	onCLick,
	direction,
	inputValue
}: InputInteractiveProps) {
	const onClickHandler = () => {
		onCLick()
	}

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		onChange(value)
	}

	let Icon = Locate
	let placeholder

	switch (type) {
		case typeInputInteractive.choiceDate: {
			Icon = Calendar
			placeholder = "ДД/MM/ГГ"
			break
		}
		case typeInputInteractive.choiceLocation: {
			Icon = Locate

			if (direction === "whence") {
				placeholder = "Откуда"
			} else {
				placeholder = "Куда"
			}
			break
		}

		default:
			break
	}

	return (
		<div className={styles.wrapper}>
			<input
				type="text"
				className={styles.inputGeneral}
				placeholder={placeholder}
				onChange={onChangeHandler}
				value={inputValue}
			/>
			<button
				type="button"
				onClick={onClickHandler}
				className={styles.icon}>
				<Icon className={styles.img} />
			</button>
		</div>
	)
}
