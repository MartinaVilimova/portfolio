import React from 'react'
import ItemResume from '../../components/ItemResume'
import { dataEducation, dataExperience } from '../../components/ItemResume/data'
import { StyledH3 } from '../../styled/StyledTitle/styled'
import { Article, WrapperItems } from './styled'

const ResumeContent: React.FC = () => (
	<>
		<Article>
			<StyledH3>Vzdělání</StyledH3>
			<WrapperItems>
				<ItemResume data={dataEducation} />
			</WrapperItems>
		</Article>
		<Article>
			<StyledH3>Pracovní zkušenosti</StyledH3>
			<WrapperItems>
				<ItemResume data={dataExperience} />
			</WrapperItems>
		</Article>
	</>
)

export default ResumeContent
