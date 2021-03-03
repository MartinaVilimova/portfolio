import React from 'react'
import { ColorfulText } from '../../styled/ColorfulText/styled'
import {
	Wrapper,
	PersonalInfo1,
	Name,
	Text,
	SmallText,
	WrapperLinks,
} from './styled'
import { Button } from '../../components/Button/styled'
import { StyledLink } from '../../styled/StyledLink/styled'
import { StyledH3 } from '../../styled/StyledTitle/styled'
import ContentColumns, { NumberColumns } from '../../components/ContentColumns'
import { Paragraph } from '../../styled/StyledParagraph/styled'

const AboutMeText: React.FC = () => (
	<Wrapper>
		<StyledH3>
			<SmallText>Junior</SmallText> <ColorfulText>Front-end</ColorfulText>
		</StyledH3>
		<ContentColumns
			columns={NumberColumns.Columns2}
			columnsIpad={NumberColumns.Columns2}
		>
			<PersonalInfo1>
				<Name>
					Narození:<Text> 14.&nbsp;7.&nbsp;1996</Text>
				</Name>
				<Name>
					Nacházím se:<Text> Česká&nbsp;republika</Text>
				</Name>
				<Name>
					Město:<Text> Praha</Text>
				</Name>
			</PersonalInfo1>
			<PersonalInfo1>
				<Name>
					Telefon:<Text> +420&nbsp;728&nbsp;445&nbsp;052</Text>
				</Name>
				<Name>
					Email:<Text> vilima.tul@gmail.com</Text>
				</Name>
				<Name>
					Zaměstnaná:<Text> freelancer</Text>
				</Name>
			</PersonalInfo1>
		</ContentColumns>
		<Paragraph>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
			aliquid eius repellat fugit sunt assumenda deleniti blanditiis!
			Natus eius animi, voluptas, corrupti culpa iste ratione quam
			deleniti, doloremque excepturi voluptatem. Lorem, ipsum dolor sit
			amet consectetur adipisicing elit. Corrupti doloremque enim
			reprehenderit minus similique illum mollitia ea architecto placeat
			maiores, asperiores est harum atque animi omnis ipsum quos obcaecati
			incidunt.
		</Paragraph>
		<WrapperLinks>
			<StyledLink to="/">
				<Button>Stáhnout životopis</Button>
			</StyledLink>
			<StyledLink to="/">
				<Button>Napiš mi</Button>
			</StyledLink>
		</WrapperLinks>
	</Wrapper>
)

export default AboutMeText
