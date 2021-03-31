import React, { useState } from 'react'
import { SmallButton } from '../../components/Button/styled'
import Columns, { NumberColumns } from '../../components/Columns'
import ItemMyWork from '../../components/ItemMyWork'
import { DataFilter, dataMyWork } from '../../components/ItemMyWork/data'
import Pagination from '../../features/Pagination'
import { WrapperButtons } from './styled'

enum ButtonNames {
	All = 'Všechno',
	OwnWork = 'Jen má práce',
	Cooperation = 'Spolupráce',
}

const buttons = [ButtonNames.All, ButtonNames.OwnWork, ButtonNames.Cooperation]

const ContentMyWork: React.FC = () => {
	const [active, setActive] = useState(ButtonNames.All)

	const [filterData, setFilterData] = useState(dataMyWork)

	const aplicationFilter = (button: string) => {
		if (button === ButtonNames.All) {
			setFilterData(dataMyWork)
		}
		if (button === ButtonNames.OwnWork) {
			const dataOwnWork = dataMyWork.filter(
				(item) => item.filter === DataFilter.ownWork
			)
			setFilterData(dataOwnWork)
		}
		if (button === ButtonNames.Cooperation) {
			const dataCooperationWork = dataMyWork.filter(
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
				<ItemMyWork dataItems={currentItems} />
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
