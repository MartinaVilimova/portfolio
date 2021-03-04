import React from 'react'
import Item from '../../components/Item'
import { dataKnowledge } from '../../components/Item/data'
import { Paragraph } from '../../styled/StyledParagraph/styled'
import { StyledH3 } from '../../styled/StyledTitle/styled'
import { TextAnchor } from './styled'

const KnowledgeContent: React.FC = () => (
	<>
		<StyledH3>S čím jsem se na cestě IT setkala</StyledH3>
		<Paragraph>
			Nemám počítačovou školu ani žádné podobné vzdělání v tomto odvětí.
			Přesto mě tento obor natolik nadchl, že jsem se rozhodla tomu dát
			šanci. Začala jsem základy a postupně na to nabalovala další
			znalosti. Učila jsem se z informací získaných na internetu, zašla na
			pár kurzů, dělala projekty s přáteli nebo jsem si hrála CodeCombat.
		</Paragraph>
		<TextAnchor></TextAnchor>
		<Item data={dataKnowledge} />
	</>
)

export default KnowledgeContent
