import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DataFilter, getDataMyWork } from 'components/ItemMyWork/data'
import Columns, { NumberColumns } from 'components/Columns'
import { SmallButton } from 'components/Button/styled'
import ItemMyWork from 'components/ItemMyWork'
import Pagination from 'features/Pagination'
import { WrapperButtons } from './styled'

const ContentMyWork: React.FC = () => {
	const { t } = useTranslation()

	const buttons = [
		t('myWork.button.all'),
		t('myWork.button.ownWork'),
		t('myWork.button.cooperation'),
	]

	const [active, setActive] = useState(buttons[0])

	const [filterData, setFilterData] = useState(getDataMyWork(t))

	const aplicationFilter = (button: string) => {
		setCurrentPage(1)		
		if (button === buttons[0]) {
			setFilterData(getDataMyWork(t))
		}
		if (button === buttons[1]) {
			const dataOwnWork = getDataMyWork(t).filter(
				(item) => item.filter === DataFilter.ownWork
			)
			setFilterData(dataOwnWork)
		}
		if (button === buttons[2]) {
			const dataCooperationWork = getDataMyWork(t).filter(
				(item) => item.filter === DataFilter.cooperation
			)
			setFilterData(dataCooperationWork)
		}
	}

	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState(6)

	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem)

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

	return (
		<>
			<WrapperButtons>
				{buttons.map((item, index) => (
					<SmallButton
						key={index}
						active={active === item}
						onClick={() => {
							setActive(item)
							aplicationFilter(item)
						}}
					>
						{item}
					</SmallButton>
				))}
			</WrapperButtons>
			<Columns
				columns={NumberColumns.Columns3}
				columnsIpad={NumberColumns.Columns1}
			>
				{currentItems.map((item, index) => (
					<ItemMyWork key={index} dataItem={item} />
				))}
			</Columns>
			<Pagination
				itemsPerPage={itemsPerPage}
				totalItems={filterData.length}
				paginate={paginate}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				setItemsPerPage={setItemsPerPage}
			/>
		</>
	)
}

export default ContentMyWork
