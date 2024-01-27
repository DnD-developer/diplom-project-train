// utils
import { ChangeEvent } from "react"
// styles
import styles from "@/app/modules/SearchTickets/components/LocatePicker/LocatePicker.module.scss"
// interfaces
import { LocatePickerProps } from "@/app/modules/SearchTickets/components/LocatePicker/LocatePicker.interface"
// icons
import { Locate } from "@/constants/icons"

export function LocatePicker({ onChange, direction }: LocatePickerProps) {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		onChange(value)
	}

	const onFocusHandler = () => {
		onChange("")
	}

	return (
		<div className={styles.wrapper}>
			<input
				type="text"
				data-direction={direction}
				className={styles.inputGeneral}
				placeholder={direction === "whence" ? "Откуда" : "Куда"}
				onChange={onChangeHandler}
				onFocus={onFocusHandler}
			/>
			<span className={styles.icon}>
				<Locate className={styles.img} />
			</span>
		</div>
	)
}
