// utils
import { ChangeEvent } from "react"
// interface
import { InputSubscribtionProps } from "@/app/modules/Footer/ui/InputSubscibtion/InputSubscribtion.interface"
// styles
import styles from "@/app/modules/Footer/ui/InputSubscibtion/InputSubscribtion.module.scss"

export function InputSubscribtion({ inputValue, onInput }: InputSubscribtionProps) {
	const onInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		onInput(value)
	}
	return (
		<input
			placeholder="e-mail"
			className={styles.input}
			type="email"
			onChange={onInputHandler}
			value={inputValue}
		/>
	)
}
