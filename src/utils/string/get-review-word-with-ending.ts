export const getReviewWordWithEnding = (reviewCount: number) => {
	const lastDigit = reviewCount % 10
	const lastTwoDigits = reviewCount % 100

	if (lastDigit === 1 && lastTwoDigits !== 11) {
		return `${reviewCount} отзыв`
	} else if (
		[2, 3, 4].includes(lastDigit) &&
		![12, 13, 14].includes(lastTwoDigits)
	) {
		return `${reviewCount} отзыва`
	} else {
		return `${reviewCount} отзывов`
	}
}
