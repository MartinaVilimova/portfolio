import React from 'react'
import { Link } from 'react-scroll'
import Item from '../../components/Item'
import { dataKnowledge } from '../../components/Item/data'
import { Paragraph } from '../../styled/StyledParagraph/styled'
import { StyledH3, StyledH6 } from '../../styled/StyledTitle/styled'
import { BlockAnchors } from './styled'

const KnowledgeContent: React.FC = () => (
	<>
		<StyledH3>S čím jsem se na cestě IT setkala</StyledH3>
		<Paragraph>
			Nemám počítačovou školu ani žádné podobné vzdělání v tomto odvětí.
			Přesto mě tento obor natolik nadchl, že jsem se rozhodla tomu dát
			šanci. Začala jsem základy a postupně na to nabalovala další
			znalosti. Učila jsem se z informací získaných na internetu, zašla na
			pár <a href="https://www.czechitas.cz/cs/">kurzů</a>, dělala
			projekty s přáteli nebo jsem si hrála&nbsp;
			<a href="https://codecombat.com/play">CodeCombat</a>.
		</Paragraph>
		<BlockAnchors>
			<StyledH6>Co jsem se naučila</StyledH6>
			{dataKnowledge.map((text, index) => (
				<Link key={index} to={text.title} smooth={true} offset={-85}>
					{text.title}
				</Link>
			))}
		</BlockAnchors>
		<Item data={dataKnowledge} />
	</>
)

export default KnowledgeContent
