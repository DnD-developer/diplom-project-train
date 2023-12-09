// styles
import styles from "@/app/modules/ResultOrder/ResultOrder.module.scss"
// interfaces
import { ResultOrderProps } from "@/app/modules/ResultOrder/ResultOrder.interface"
// compoonents
import { InstructionList } from "@/app/modules/ResultOrder/components/InstructionsList"
import { NumberOfOrder } from "@/app/modules/ResultOrder/ui/NumberOfOrder"
import { Total } from "@/app/modules/ResultOrder/ui/Total"
import { TextForClient } from "@/app/modules/ResultOrder/components/TextForClient"
import { ManipulateAfterOrder } from "@/app/modules/ResultOrder/components/ManipulateAfterOrder"
import { Raiting } from "@/app/modules/ResultOrder/components/Raiting"

export function ResutOrder({ orderInfo }: ResultOrderProps) {
	const { numberOfOrder, price, instructions, nameClient } = orderInfo
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
