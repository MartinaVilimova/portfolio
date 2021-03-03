import React from 'react'
import { Wrapper } from './styled'

export enum NumberColumns {
	Columns2 = '1fr 1fr',
	Columus3 = '1fr 1fr 1fr',
}

export enum NumberColumnsIpad {
	Columns2 = '1fr 1fr',
	Columus1 = '1fr',
}

type Props = {
	columns: NumberColumns
	columnsIpad: NumberColumnsIpad
}

const ContentColumns: React.FC<Props> = ({
	columns,
	columnsIpad,
	children,
}) => (
	<Wrapper quantity={columns} quantityIpad={columnsIpad}>
		{children}
	</Wrapper>
)

export default ContentColumns
