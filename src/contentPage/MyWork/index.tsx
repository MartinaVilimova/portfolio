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

const buttons: string[] = [
	ButtonNames.All,
	ButtonNames.OwnWork,
	ButtonNames.Cooperation,
]

const ContentMyWork: React.FC = () => {
	const [active, setActive] = useState(buttons[0])

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
				<ItemMyWork dataItems={filterData} />
			</Columns>
			<Pagination />
		</>
	)
}

export default ContentMyWork
