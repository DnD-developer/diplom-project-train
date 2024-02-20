// interface
import { BreadCrumbsProps } from "@/app/modules/BreadCrumbs/BreadCrumbs.interface"
// components
import { List } from "@/app/modules/BreadCrumbs/components/List"

export function BreadCrumbs({ items }: BreadCrumbsProps) {
	return <List items={items} />
}
