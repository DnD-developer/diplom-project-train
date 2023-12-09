import { NumberOfOrderProps } from "@/app/modules/ResultOrder/ui/NumberOfOrder"
import { TotalProps } from "@/app/modules/ResultOrder/ui/Total"
import { InstructionListProps } from "@/app/modules/ResultOrder/components/InstructionsList"
import { TextForClientProps } from "@/app/modules/ResultOrder/components/TextForClient"

export interface ResultOrderProps {
	orderInfo: NumberOfOrderProps & TotalProps & InstructionListProps & TextForClientProps
}
