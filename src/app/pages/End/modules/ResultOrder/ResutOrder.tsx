// styles
import styles from "@/app/pages/End/modules/ResultOrder/ResultOrder.module.scss"
// interfaces
import { ResultOrderProps } from "@/app/pages/End/modules/ResultOrder/ResultOrder.interface"
// constants
import { instructions } from "@/app/pages/End/modules/ResultOrder/constants/instructions"
// compoonents
import { InstructionList } from "@/app/pages/End/modules/ResultOrder/components/InstructionsList"
import { NumberOfOrder } from "@/app/pages/End/modules/ResultOrder/ui/NumberOfOrder"
import { Total } from "@/app/pages/End/modules/ResultOrder/ui/Total"
import { TextForClient } from "@/app/pages/End/modules/ResultOrder/components/TextForClient"
import { ManipulateAfterOrder } from "@/app/pages/End/modules/ResultOrder/components/ManipulateAfterOrder"
import { Raiting } from "@/app/pages/End/modules/ResultOrder/components/Raiting"

export function ResutOrder({ orderInfo }: ResultOrderProps) {
	const { numberOfOrder, price, nameClient } = orderInfo
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Благодарим ваc за заказ!</h1>
			<div className={styles.content}>
				<div className={styles.contentTop}>
					<NumberOfOrder numberOfOrder={numberOfOrder} />
					<Total price={price} />
				</div>
				<InstructionList instructions={instructions} />
				<TextForClient nameClient={nameClient} />
				<ManipulateAfterOrder>
					<Raiting
						onClick={(rait: number) => console.log(rait)}
						text="Оценить сервис"
					/>
				</ManipulateAfterOrder>
			</div>
		</div>
	)
}
