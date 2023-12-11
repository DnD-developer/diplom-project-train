// styles
import styles from "@/app/pages/Main/modules/Reviews/components/ReviewsCarousel/ReviewsCarousel.module.scss"
// inteerfaces
import { ReviewsCarouselProps } from "@/app/pages/Main/modules/Reviews/components/ReviewsCarousel/ReviewsCarousel.interface"
// components
import Carousel from "react-slick"

export function ReviewsCarousel({ children }: ReviewsCarouselProps) {
	return (
		<Carousel
			dots
			arrows={false}
			slidesToShow={2}
			slidesToScroll={2}
			className={styles.wrapper}>
			{children}
		</Carousel>
	)
}
