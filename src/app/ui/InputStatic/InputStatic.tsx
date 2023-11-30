// utils
import React from "react"
// styles
import styles from "./InputStatic.module.scss"
// interfaces
import { InputStaticProps, inputSettings } from "./InputStatic.interface"
import { typeInputSatic } from "../../../types/enums"

export default function InputStatic({ type, label = "Заголовок" }: InputStaticProps) {
	const settings: inputSettings = {
		classes: styles.input,
		labelTitle: label
	}

	switch (type) {
		case typeInputSatic.seriaPassport: {
			settings.classes += ` ${styles.personalDocument}`
			settings.labelTitle = "Серия"
			break
		}
		case typeInputSatic.numberPassport: {
			settings.classes += ` ${styles.personalDocument}`
			settings.labelTitle = "Номер"
			break
		}
		case typeInputSatic.birthSertificate: {
			settings.classes += ` ${styles.personalDocument}`
			settings.labelTitle = "Номер"
			break
		}
		case typeInputSatic.dateOfBirth: {
			settings.classes += ` ${styles.dateBirth}`
			settings.labelTitle = "Дата рождения"
			break
		}
		case typeInputSatic.defaultText: {
			settings.classes += ` ${styles.defaultText}`
			break
		}

		default:
			break
	}

	return (
		<label
			htmlFor="inputStatic"
			className={styles.label}>
			{settings.labelTitle}
			<input
				id="inputStatic"
				className={settings.classes}
				type="text"
			/>
		</label>
	)
}
