// styles
import styles from "@/app/pages/Main/modules/About/ui/Paragraph/Paragraph.module.scss"
// interfaces
import { ParagraphProps } from "@/app/pages/Main/modules/About/ui/Paragraph/Paragraph.interface"

export function Paragraph({ text, bold = false }: ParagraphProps) {
	const classes = `${styles.paragrath}${bold ? ` ${styles.paragrathBold}` : ""}`
	return <p className={classes}>{text}</p>
}
