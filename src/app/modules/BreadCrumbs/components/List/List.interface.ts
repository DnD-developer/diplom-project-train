import { ItemProps } from "@/app/modules/BreadCrumbs/ui/Item"

export interface ListProps {
	items: Omit<ItemProps, "number">[]
}
