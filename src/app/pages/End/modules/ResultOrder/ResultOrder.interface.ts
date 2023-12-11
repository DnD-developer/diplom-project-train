import { NumberOfOrderProps } from "@/app/pages/End/modules/ResultOrder/ui/NumberOfOrder"
import { TotalProps } from "@/app/pages/End/modules/ResultOrder/ui/Total"
import { TextForClientProps } from "@/app/pages/End/modules/ResultOrder/components/TextForClient"

export interface ResultOrderProps {
	orderInfo: NumberOfOrderProps & TotalProps & TextForClientProps
}
