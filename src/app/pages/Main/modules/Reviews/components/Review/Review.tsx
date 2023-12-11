// styles
import styles from "@/app/pages/Main/modules/Reviews/components/Review/Review.module.scss"
// interfaces
import { ReviewProps } from "@/app/pages/Main/modules/Reviews/components/Review/Review.interface"

export function Review({ reviewInfo }: ReviewProps) {
	return (
		<div className={styles.wrapper}>
			<img
				src={reviewInfo.img}
				className={styles.img}
				alt=""
			/>
			<div className={styles.contentText}>
				<h3 className={styles.title}>{reviewInfo.title}</h3>
				<q className={styles.text}>{reviewInfo.text}</q>
			</div>
		</div>
	)
}
