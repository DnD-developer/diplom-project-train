// icon
import LogoIcon from "@/app/assets/icons/logo.svg"
// interface
import { LogoProps } from "@/app/ui/Logo/Logo.interface"
// styles
import styles from "./Logo.module.scss"

export default function Logo({ mainLink }: LogoProps) {
	return (
		<a href={mainLink}>
			<LogoIcon className={styles.logo} />
		</a>
	)
}
