// utils
import { FormEvent } from "react"
import { useNavigate } from "react-router-dom"
// styles
import styles from "@/app/modules/SearchTickets/SearchTickets.module.scss"
// interfaces
import { SearchTicketsProps } from "@/app/modules/SearchTickets/SearchTickets.interface"
// components
import { InputsSearch } from "@/app/modules/SearchTickets/components/InputsSearch"
import { Button, typeButton } from "@/app/ui/Button"
import { PreloaderStatus } from "@/app/ui/PreloaderStatus"
import { DatePicker, typeDatePicker } from "@/app/components/DatePicker"
import { LocatePicker } from "@/app/modules/SearchTickets/components/LocatePicker"

export function SearchTickets({ children, background, type = "default" }: SearchTicketsProps) {
	const toTickets = useNavigate()
	const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (type === "default") {
			toTickets(process.env.TICKETS_PAGE)
		}
	}

	return (
		<div
			className={styles.wrapper}
			style={{ backgroundImage: `url(${background})` }}>
			{children}
			<div
				className={`container ${
					type === "default" ? styles.wrapperContainer : styles.wrapperContainerHorizontal
				}`}>
				{type === "default" ? (
					<h1 className={styles.title}>
						Вся жизнь - <span>путешествие</span>
					</h1>
				) : null}

				<form
					className={type === "default" ? styles.search : styles.searchHorizontal}
					onSubmit={onSubmitHandler}>
					<div
						className={
							type === "default"
								? styles.inputsSection
								: styles.inputsSectionHorizontal
						}>
						<div
							className={
								type === "default" ? styles.inputFloor : styles.inputFloorHorizontal
							}>
							<InputsSearch
								title="Направление"
								switchDirection>
								<LocatePicker onChange={() => {}} />
							</InputsSearch>
						</div>
						<div
							className={
								type === "default" ? styles.inputFloor : styles.inputFloorHorizontal
							}>
							<InputsSearch
								title="Дата"
								switchDirection={false}>
								<DatePicker
									type={typeDatePicker.normal}
									onChange={() => {}}
								/>
							</InputsSearch>
						</div>
					</div>
					<div className={styles.buttonFloor}>
						<Button
							typeBtn="submit"
							text="Найти билеты"
							type={typeButton.longHighOrangeBlackFontThree}
						/>
					</div>
				</form>
			</div>
			{type === "default" ? <PreloaderStatus progress={100} /> : null}
		</div>
	)
}
