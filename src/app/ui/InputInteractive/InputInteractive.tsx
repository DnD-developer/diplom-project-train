// utils
import { ChangeEvent } from "react"
// icons
import Locate from "@/app/assets/icons/locate.svg"
import Calendar from "@/app/assets/icons/calendar.svg"
// interfaces
import { typeInputInteractive } from "@/types/enums"
import { InputInteractiveProps } from "./InputInteractive.interface"
// styles
import styles from "./InputInteractive.module.scss"

export default function InputInteractive({
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
