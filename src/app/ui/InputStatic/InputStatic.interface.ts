export enum typeInputSatic {
	seriaPassport,
	numberPassport,
	birthSertificate,
	dateOfBirth,
	defaultText
}

export interface InputStaticProps {
	type: typeInputSatic
	label?: string
}

export interface inputSettings {
	labelTitle: string
	classes: string
}
