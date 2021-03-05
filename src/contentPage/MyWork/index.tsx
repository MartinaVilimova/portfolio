import React from 'react'
import { SmallButton } from '../../components/Button/styled'
import Columns, { NumberColumns } from '../../components/Columns'
import ItemMyWork from '../../components/ItemMyWork'
import { WrapperButtons } from './styled'

const ContentMyWork: React.FC = () => {
	return (
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
		</>
	)
}

export default ContentMyWork
