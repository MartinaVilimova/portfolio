import React from 'react'
import Item from '../../components/Item'
import { dataEducation, dataExperience } from '../../components/Item/data'
import { StyledH3 } from '../../styled/StyledTitle/styled'
import { Article, WrapperItems } from './styled'

const ResumeContent: React.FC = () => {
    return (
        <>
                    <Article>
                        <StyledH3>Vzdělání</StyledH3>
                        <WrapperItems>
                            <Item data={dataEducation} />
                        </WrapperItems>
                    </Article>
                    <Article>
                        <StyledH3>Pracovní zkušenosti</StyledH3>
                        <WrapperItems>
                            <Item data={dataExperience} />
                        </WrapperItems>
                    </Article>
		</>
    )
}

export default ResumeContent
