declare module "*.module.css"
declare module "*.module.scss"

declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.gif"
declare module "*.webp"
declare module "*.mp3"
declare module "*.svg" {
	import { FC, SVGProps } from "react"

	const SVG: FC<SVGProps<SVGSVGElement>>
	export default SVG
}
