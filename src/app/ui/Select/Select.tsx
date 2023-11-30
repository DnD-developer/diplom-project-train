import React, { useState, useRef } from "react"

// interfaces
import { SelectProps } from "./Select.interface.js"
// styles
import styles from "./Select.module.scss"
// helpers
import { getLabel } from "./helpers/Select.helper"

export default function Select({ options, defaultValue, onChange }: SelectProps) {
	const [activeValue, setActiveValue] = useState(defaultValue)
	const [choiceStatus, setChoiceStatus] = useState(false)

	const classActive = `${styles.option} ${styles.optionToChoice}`

	const onChangeHandler = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
		const { id } = currentTarget
		setChoiceStatus(!choiceStatus)
		setActiveValue(id as SelectProps["defaultValue"])
		onChange(activeValue)
	}

	const optionsComponentRender = options.map(option => (
		<div
			key={option.value}
			id={option.value}
			onClick={onChangeHandler}
			className={`${styles.option} ${styles.optionToChoice}`}>
			<span className={styles.labelOption}>{option.label}</span>
		</div>
	))

	return (
		<div className={styles.wrapper}>
			<p className={styles.title}>сортировать по: </p>
			<div className={styles.selectWrapper}>
				<div
					id={activeValue}
					className={choiceStatus ? classActive : styles.option}
					onClick={onChangeHandler}>
					<span className={styles.labelOption}>{getLabel(activeValue, options)}</span>
				</div>
				{choiceStatus
					? optionsComponentRender.filter(option => option.key !== activeValue)
					: null}
			</div>
		</div>
	)
}
