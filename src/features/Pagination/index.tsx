import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowRight, ArrowLeft } from '@styled-icons/feather'
import { Button } from 'components/Button/styled'
import { Wrapper, Page, PageArrow, WrapperButton } from './styled'

type Props = {
	itemsPerPage: number
	totalItems: number
	paginate: (pageNumber: number) => void
	currentPage: number
	setCurrentPage: (actualPage: number) => void
	setItemsPerPage: (itemsPerPage: number) => void
}

const Pagination: React.FC<Props> = ({
	itemsPerPage,
	totalItems,
	paginate,
	currentPage,
	setCurrentPage,
	setItemsPerPage,
}) => {
	const { t } = useTranslation()

	const pageNumbers = Array(Math.ceil(totalItems / itemsPerPage))
		.fill(null)
		.map((_, index) => index + 1)

	const initialPageNumberLimit = 5
	const initialItemNumberLimit = 6
	const [pageNumberLimit] = useState(initialPageNumberLimit)
	const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(
		initialPageNumberLimit
	)
	const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

	const handleNext = () => {
		setCurrentPage(currentPage + 1)

		if (currentPage + 1 > maxPageNumberLimit) {
			setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
			setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
		}
	}

	const handlePrev = () => {
		setCurrentPage(currentPage - 1)

		if (currentPage - 1 === minPageNumberLimit) {
			setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
			setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
		}
	}

	const pageIncrement =
		pageNumbers.length > maxPageNumberLimit ? (
			<Page active={false} onClick={handleNext}>
				&hellip;
			</Page>
		) : null

	const pageDecrement =
		minPageNumberLimit > 1 ? (
			<Page active={false} onClick={handlePrev}>
				&hellip;
			</Page>
		) : null

	const handleLoadMore = () =>
		setItemsPerPage(itemsPerPage + initialItemNumberLimit)

	const handleLoadLess = () =>
		setItemsPerPage(itemsPerPage - initialItemNumberLimit)

	const buttonMore =
		pageNumbers.length > 1 ? (
			<Button onClick={handleLoadMore}>
				{t('myWork.pagination.morePages')}
			</Button>
		) : null

	const buttonLess =
		itemsPerPage > initialItemNumberLimit ? (
			<Button onClick={handleLoadLess}>
				{t('myWork.pagination.lessPages')}
			</Button>
		) : null

	return (
		<>
			<Wrapper>
				<PageArrow
					active={false}
					onClick={handlePrev}
					disabled={currentPage === pageNumbers[0] ? true : false}
				>
					<ArrowLeft />
				</PageArrow>
				{pageDecrement}
				{pageNumbers.map((number) =>
					number < maxPageNumberLimit + 1 &&
					number > minPageNumberLimit ? (
						<Page
							key={number}
							active={currentPage === number}
							onClick={() => paginate(number)}
						>
							{number}
						</Page>
					) : null
				)}
				{pageIncrement}
				<PageArrow
					active={false}
					onClick={handleNext}
					disabled={
						currentPage === pageNumbers[pageNumbers.length - 1]
							? true
							: false
					}
				>
					<ArrowRight />
				</PageArrow>
			</Wrapper>
			<WrapperButton>
				{buttonMore}
				{buttonLess}
			</WrapperButton>
		</>
	)
}

export default Pagination
