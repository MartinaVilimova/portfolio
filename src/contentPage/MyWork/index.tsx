import React from 'react'
import { SmallButton } from '../../components/Button/styled'
import Columns, { NumberColumns } from '../../components/Columns'
import ItemMyWork from '../../components/ItemMyWork'
import Pagination from '../../features/Pagination'
import { WrapperButtons } from './styled'

const ContentMyWork: React.FC = () => (
	<>
		<WrapperButtons>
			<SmallButton>Všechno</SmallButton>
			<SmallButton>Jen má práce</SmallButton>
			<SmallButton>Spolupráce</SmallButton>
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

export default ContentMyWork
