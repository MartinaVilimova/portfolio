import React from 'react'
import { Wrapper } from './styled'

export enum NumberColumns {
	Columns2 = '1fr 1fr',
	Columus3 = '1fr 1fr 1fr',
}

type Props = {
	columns: NumberColumns
}

const ContentColumns: React.FC<Props> = ({ columns, children }) => (
	<Wrapper quantity={columns}>{children}</Wrapper>
)

export default ContentColumns
