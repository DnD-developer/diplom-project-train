export enum typeButton {
	longHighOrangeBlackFontThree,
	shortHighOrangeWhiteFontFour,
	shortLowOrangeWhiteFontFour,
	shorLowTransparentBlackFontThree,
	longHighOrangeWhiteFontFour,
	longHighTransparentWhiteFontThree,
	shortHighTransparentWhiteFontThree,
	shortMiddleTransparentBlackFontThree
}

export interface buttonProps {
	text: string
	type: typeButton
	typeBtn?: "submit" | "button" | "reset"
	onClick?: () => void
	hold?: boolean
}
