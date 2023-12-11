// styles
import styles from "@/app/pages/End/modules/ResultOrder/ui/ItemInstructions/ItemInstruction.module.scss"
// interfaces
import { ItemInstructionProps } from "@/app/pages/End/modules/ResultOrder/ui/ItemInstructions/ItemInstruction.interface"

export function ItemInstruction({ instruction }: ItemInstructionProps) {
	const firstPart = instruction.text.replace(new RegExp(`${instruction.boldSubText}.*`), "")
	const secondPart = instruction.text.replace(new RegExp(`.*${instruction.boldSubText}`), "")

	return (
		<li className={styles.item}>
			<img
				src={instruction.icon}
				className={styles.img}
				alt=""
			/>
			<p className={styles.text}>
				{firstPart}
				<span className={styles.accent}>{instruction.boldSubText}</span>
				{secondPart}
			</p>
		</li>
	)
}
