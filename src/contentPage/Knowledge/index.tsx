import React from 'react'
import { Link } from 'react-scroll'
import ItemResume, { AnimationType } from 'components/ItemResume'
import { dataKnowledge } from 'components/ItemResume/data'
import { StyledH3, StyledH6 } from 'styled/StyledTitle/styled'
import { StyledA } from 'styled/StyledLink/styled'
import { Paragraph } from 'styled/StyledParagraph/styled'
import { BlockAnchors } from './styled'

const KnowledgeContent: React.FC = () => (
	<>
		<StyledH3>S čím jsem se na cestě IT setkala</StyledH3>
		<Paragraph>
			Nemám počítačovou školu ani žádné podobné vzdělání v tomto odvětí.
			Přesto mě tento obor natolik nadchl, že jsem se rozhodla tomu dát
			šanci. Začala jsem základy a postupně na to nabalovala další
			znalosti. Učila jsem se z informací získaných na internetu, zašla na
			pár <StyledA href="https://www.czechitas.cz/cs/">kurzů</StyledA>,
			dělala projekty s přáteli nebo jsem si hrála&nbsp;
			<StyledA href="https://codecombat.com/play">CodeCombat</StyledA>.
		</Paragraph>
		<BlockAnchors>
			<StyledH6>Co jsem se naučila</StyledH6>
			{dataKnowledge.map((text, index) => (
				<Link key={index} to={text.title} smooth={true} offset={-85}>
					{text.title}
				</Link>
			))}
		</BlockAnchors>
		<ItemResume data={dataKnowledge} animationType={AnimationType.Fade} />
	</>
)

export default KnowledgeContent
