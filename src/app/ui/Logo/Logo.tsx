// utils
import { Link } from "react-router-dom"
// icon
import { LogoIcon } from "@/constants/icons"
// interface
import { LogoProps } from "@/app/ui/Logo/Logo.interface"
// styles
import styles from "@/app/ui/Logo/Logo.module.scss"

export function Logo({ mainLink }: LogoProps) {
	return (
		<Link to={mainLink}>
			<LogoIcon className={styles.logo} />
		</Link>
	)
}
