import React from 'react'
import { Wrapper } from './styled'

export enum NumberColumns {
	Columns1 = '1fr',
	Columns2 = '1fr 1fr',
	Columns3 = '1fr 1fr 1fr',
}

type Props = {
	columns: NumberColumns
	columnsIpad: NumberColumns
}

const Columns: React.FC<Props> = ({ columns, columnsIpad, children }) => (
	<Wrapper quantity={columns} quantityIpad={columnsIpad}>
		{children}
	</Wrapper>
)

export default Columns
