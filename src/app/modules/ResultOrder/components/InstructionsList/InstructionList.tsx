// styles
import styles from "@/app/modules/ResultOrder/components/InstructionsList/InstructionList.module.scss"
// interfaces
import { InstructionListProps } from "@/app/modules/ResultOrder/components/InstructionsList/InstructionList.interface"
// components
import { ItemInstruction } from "@/app/modules/ResultOrder/ui/ItemInstructions"

export function InstructionList({ instructions }: InstructionListProps) {
	return (
		<div className={styles.listWrapper}>
			<ul className={styles.list}>
				{instructions.map(instruction => (
					<ItemInstruction
						key={instruction.icon}
						instruction={instruction}
					/>
				))}
			</ul>
		</div>
	)
}
