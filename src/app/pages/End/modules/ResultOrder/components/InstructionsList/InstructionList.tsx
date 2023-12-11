// styles
import styles from "@/app/pages/End/modules/ResultOrder/components/InstructionsList/InstructionList.module.scss"
// interfaces
import { InstructionListProps } from "@/app/pages/End/modules/ResultOrder/components/InstructionsList/InstructionList.interface"
// components
import { ItemInstruction } from "@/app/pages/End/modules/ResultOrder/ui/ItemInstructions"

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
