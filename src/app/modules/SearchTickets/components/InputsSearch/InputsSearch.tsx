// utils
import { useState } from "react"
// styles
import styles from "@/app/modules/SearchTickets/components/InputsSearch/InputsSearch.module.scss"
// interfaces
import { InputsSearchProps } from "@/app/modules/SearchTickets/components/InputsSearch/InputsSearch.interface"
// components
import { IconButton, typeIconButton } from "@/app/ui/IconButton"

export function InputsSearch({ title, children, switchDirection = false }: InputsSearchProps) {
	const [directionStraight, setDirectionStraight] = useState(true)
	const switchDirectionHandler = () => {}

	return (
		<>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.wrapperInputs}>
				<div className={styles.wrapperInput}>{children}</div>

				<div className={styles.switchWrapper}>
					{switchDirection ? (
						<IconButton
							type={typeIconButton.switch}
							onClick={switchDirectionHandler}
						/>
					) : null}
				</div>

				<div className={styles.wrapperInput}>{children}</div>
			</div>
		</>
	)
}
