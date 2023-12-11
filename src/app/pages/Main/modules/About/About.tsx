// styles
import styles from "@/app/pages/Main/modules/About/About.module.scss"
// interfaces
import { ModulesSectionProps } from "@/app/pages/Main/modules/ModulesSection.interface"
// constants
import { AboutText } from "@/app/pages/Main/modules/About/constants/aboutText"
// components
import { SectionTitle } from "@/app/pages/Main/ui/SectionTitle"
import { Paragraph } from "@/app/pages/Main/modules/About/ui/Paragraph"

export function About({ id, title }: ModulesSectionProps) {
	return (
		<div
			id={id}
			className={styles.wrapper}>
			<div className="container">
				<SectionTitle text={title} />
				<div className={styles.wrapperContent}>
					<div className={styles.verticalLine} />
					<div className={styles.wrapperText}>
						<Paragraph text={AboutText.paragraphFirst} />
						<Paragraph text={AboutText.paragraphSecond} />
						<Paragraph
							text={AboutText.paragraphLast}
							bold
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
