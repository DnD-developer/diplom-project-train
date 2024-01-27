// interfaces
import { DatePickerProps, typeDatePicker } from "@/app/components/DatePicker/DatePicker.interface"
// icons
import { Calendar } from "@/constants/icons"
// styles
import styles from "@/app/components/DatePicker/DatePicker.module.scss"
// components
import { DatePicker as DatePickerAntd, ConfigProvider } from "antd"

export function DatePicker({ type, onChange }: DatePickerProps) {
	const onChoiceDate: DatePickerProps["onChange"] = date => {
		onChange(date)
	}

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: styles.accentColor
				}
			}}>
			<DatePickerAntd
				picker="date"
				className={
					type === typeDatePicker.normal ? styles.inputGeneral : styles.inputGeneralSmall
				}
				placeholder="ДД/ММ/ГГГГ"
				suffixIcon={<Calendar />}
				format="DD/MM/YYYY"
				showToday={false}
				placement="bottomLeft"
				onChange={onChoiceDate}
			/>
		</ConfigProvider>
	)
}
