// styles
import styles from "@/app/pages/Main/modules/HowItWork/ui/LinkLearnMore/LinkLearnMore.module.scss"
// interfaces
import { LinkLearnMoreProps } from "@/app/pages/Main/modules/HowItWork/ui/LinkLearnMore/LinkLearnMore.interface"

export function LinkLearnMore({ url, text }: LinkLearnMoreProps) {
	return (
		<a
			className={styles.link}
			href={url}
			target={url}>
			{text}
		</a>
	)
}
