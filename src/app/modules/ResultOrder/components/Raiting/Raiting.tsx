import { useState } from "react"
// styles
import styles from "@/app/modules/ResultOrder/components/Raiting/Raiting.module.scss"
// interfaces
import { RaitingProps } from "@/app/modules/ResultOrder/components/Raiting/Raiting.interface"
// icons
import { Star } from "@/constants/icons"
// components
import { Rate } from "antd"

export function Raiting({ text, onClick }: RaitingProps) {
	const [disabled, setDisabled] = useState(false)
	const onClickHandler = (rait: number) => {
		if (!disabled) {
			setDisabled(true)
			onClick(rait)
		}
	}
	return (
		<div className={styles.wrapper}>
			<span className={styles.text}>{text}</span>
			<Rate
				disabled={disabled}
				allowHalf
				defaultValue={0}
				onChange={onClickHandler}
				className={styles.listRait}
				character={<Star className={styles.rait} />}
			/>
		</div>
	)
}
