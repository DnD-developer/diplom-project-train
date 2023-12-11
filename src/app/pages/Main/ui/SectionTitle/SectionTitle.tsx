// styles
import styles from "@/app/pages/Main/ui/SectionTitle/SectionTitle.module.scss"
// interfaces
import { SectionTitleProps } from "@/app/pages/Main/ui/SectionTitle/SectionTitle.interface"

export function SectionTitle({ text, white = false }: SectionTitleProps) {
	const classes = `${styles.title}${white ? ` ${styles.whiteTitle}` : ""}`
	return <h2 className={classes}>{text}</h2>
}
