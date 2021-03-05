import React from 'react'
import { Wrapper } from './styled'

export enum UnitsData {
	SmallPage = '90vh',
	LargePage = '100%',
}

type Props = {
	units: UnitsData
}

const PageWrapper: React.FC<Props> = ({ units, children }) => (
	<Wrapper value={units}>{children}</Wrapper>
)

export default PageWrapper
