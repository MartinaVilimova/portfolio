import React from 'react'
import { useTranslation } from 'react-i18next'
import Columns, { NumberColumns } from 'components/Columns'
import { Button } from 'components/Button/styled'
import { StyledA, StyledLink } from 'styled/StyledLink/styled'
import { ColorfulText } from 'styled/ColorfulText/styled'
import { Paragraph } from 'styled/StyledParagraph/styled'
import { StyledH3 } from 'styled/StyledTitle/styled'
import {
	Wrapper,
	PersonalInfo1,
	Name,
	Text,
	SmallText,
	WrapperLinks,
} from './styled'

const AboutMeText: React.FC = () => {
	const { t } = useTranslation()

	return (
		<Wrapper>
			<StyledH3>
				<SmallText>{t('aboutMe.level')}</SmallText>
				<ColorfulText>{t('aboutMe.specialization')}</ColorfulText>
			</StyledH3>
			<Columns
				columns={NumberColumns.Columns2}
				columnsIpad={NumberColumns.Columns2}
			>
				<PersonalInfo1>
					<Name>
						{t('aboutMe.birth.title')}
						<Text>{t('aboutMe.birth.info')}</Text>
					</Name>
					<Name>
						{t('aboutMe.place.title')}
						<Text>{t('aboutMe.place.info')}</Text>
					</Name>
					<Name>
						{t('aboutMe.city.title')}
						<Text>{t('aboutMe.city.info')}</Text>
					</Name>
				</PersonalInfo1>
				<PersonalInfo1>
					<Name>
						{t('aboutMe.phone.title')}
						<Text>
							&nbsp;
							<StyledA href="tel:+420728445052">
								{t('aboutMe.phone.info')}
							</StyledA>
						</Text>
					</Name>
					<Name>
						{t('aboutMe.email.title')}
						<Text>
							&nbsp;
							<StyledA href="mailto:vilima.tul@gmail.com">
								{t('aboutMe.email.info')}
							</StyledA>
						</Text>
					</Name>
					<Name>
						{t('aboutMe.job.title')}
						<Text>{t('aboutMe.job.info')}</Text>
					</Name>
				</PersonalInfo1>
			</Columns>
			<Paragraph>
				Programování je obor, který nabízí mnoho možností a já v něm
				vidím velkou budoucnost. bla bla bla Lorem ipsum dolor sit, amet
				consectetur adipisicing elit. Dolorem repellendus facilis
				aliquid quibusdam atque molestias sint quos ullam perspiciatis,
				cupiditate eaque nobis aspernatur ad corporis mollitia aut
				accusantium ut vitae!
			</Paragraph>
			<WrapperLinks>
				<StyledLink
					to="/CV_vilimova_martina.pdf"
					target="_blank"
					download
				>
					<Button>{t('special.downloadCV')}</Button>
				</StyledLink>
				<StyledLink to="/contact">
					<Button>{t('special.writeMe')}</Button>
				</StyledLink>
			</WrapperLinks>
		</Wrapper>
	)
}

export default AboutMeText
