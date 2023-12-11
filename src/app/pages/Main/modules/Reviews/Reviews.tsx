// styles
import styles from "@/app/pages/Main/modules/Reviews/Reviews.module.scss"
// interfaces
import { ModulesSectionProps } from "@/app/pages/Main/modules/ModulesSection.interface"
// constants
import { reviews } from "@/app/pages/Main/modules/Reviews/constants/reviews"
// components
import { Review } from "@/app/pages/Main/modules/Reviews/components/Review"
import { ReviewsCarousel } from "@/app/pages/Main/modules/Reviews/components/ReviewsCarousel"
import { SectionTitle } from "@/app/pages/Main/ui/SectionTitle"

export function Reviews({ id, title }: ModulesSectionProps) {
	return (
		<div
			id={id}
			className={styles.wrapper}>
			<div className="container">
				<SectionTitle text={title} />
				<ReviewsCarousel>
					{reviews.map((review, i) => (
						<Review
							key={i}
							reviewInfo={review}
						/>
					))}
				</ReviewsCarousel>
			</div>
		</div>
	)
}
