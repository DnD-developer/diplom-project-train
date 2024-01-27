import { Dayjs } from "dayjs"

export enum typeDatePicker {
	normal,
	small
}

export interface DatePickerProps {
	type: typeDatePicker
	onChange: (inputValue: string | Dayjs | null) => void
}
