// utils
import { useState } from "react"
// styles
import styles from "@/app/modules/Footer/components/Subscibtion/Subscribtion.module.scss"
// components
import { Button, typeButton } from "@/app/ui/Button"
import { InputSubscribtion } from "@/app/modules/Footer/ui/InputSubscibtion"

export function Subscribtion() {
	const [inputValue, setInputValue] = useState("")

	const onInput = (value: string) => setInputValue(value)
	const onSubmit = () => console.log("Отправлено")

	return (
		<div>
			<h2 className={styles.title}>Подписка</h2>
			<form className={styles.form}>
				<label className={styles.label}>
					Будьте в курсе событий
					<InputSubscribtion
						inputValue={inputValue}
						onInput={onInput}
					/>
				</label>
				<Button
					text="Отправить"
					type={typeButton.shortHighTransparentWhiteFontThree}
					onClick={onSubmit}
				/>
			</form>
		</div>
	)
}
