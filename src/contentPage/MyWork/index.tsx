import React, { useState } from 'react'
import { SmallButton } from '../../components/Button/styled'
import Columns, { NumberColumns } from '../../components/Columns'
import ItemMyWork from '../../components/ItemMyWork'
import Pagination from '../../features/Pagination'
import { WrapperButtons } from './styled'

const buttons = ['Všechno', 'Jen má práce', 'Spolupráce']

const ContentMyWork: React.FC = () => {
	const [active, setActive] = useState(buttons[0])

	return (
		<>
			<WrapperButtons>
				{buttons.map((item, index) => (
					<SmallButton
						key={index}
						active={active === item}
						onClick={() => setActive(item)}
					>
						{item}
					</SmallButton>
				))}
			</WrapperButtons>
			<Columns
				columns={NumberColumns.Columns3}
				columnsIpad={NumberColumns.Columns1}
			>
				<ItemMyWork />
			</Columns>
			<Pagination />
		</>
	)
}

export default ContentMyWork
