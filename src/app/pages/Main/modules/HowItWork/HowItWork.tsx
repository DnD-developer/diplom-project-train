// styles
import styles from "@/app/pages/Main/modules/HowItWork/HowItWork.module.scss"
// interfaces
import { ModulesSectionProps } from "@/app/pages/Main/modules/ModulesSection.interface"
// constants
import { advantages } from "@/app/pages/Main/modules/HowItWork/constants/advantages"
// components
import { SectionTitle } from "@/app/pages/Main/ui/SectionTitle"
import { AdvantageItem } from "@/app/pages/Main/modules/HowItWork/ui/AdvantageItem"
import { LinkLearnMore } from "@/app/pages/Main/modules/HowItWork/ui/LinkLearnMore"

export function HowItWork({ id, title }: ModulesSectionProps) {
	return (
		<div
			id={id}
			className={styles.wrapper}>
			<div className="container">
				<div className={styles.wrapperTop}>
					<SectionTitle
						text={title}
						white
					/>
					<LinkLearnMore
						text="Узнать больше"
						url={process.env.LEARN_MORE}
					/>
				</div>
				<ul className={styles.advantagesList}>
					{advantages.map(advantage => (
						<AdvantageItem
							key={advantage.icon}
							advantage={advantage}
						/>
					))}
				</ul>
			</div>
		</div>
	)
}
