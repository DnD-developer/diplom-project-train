// interfaces
import { typeIconButton } from "@/types/enums"
// components
import IconButton from "@/app/ui/IconButton/IconButton"
import Logo from "@/app/ui/Logo/Logo"

export default function App() {
	const test = (value: boolean) => {
		console.log(value)
	}

	return (
		<>
			<IconButton
				type={typeIconButton.plusSquare}
				onClick={test}
			/>
			<IconButton
				type={typeIconButton.plusCircle}
				onClick={test}
			/>
			<IconButton
				type={typeIconButton.arrowTop}
				onClick={test}
			/>
			<Logo mainLink="./" />
		</>
	)
}
