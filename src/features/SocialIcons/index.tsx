import React from 'react'
import { useTranslation } from 'react-i18next'
import { Github, Facebook, Linkedin } from '@styled-icons/boxicons-logos/'
import { Wrapper, VerticalText, Line, Icon } from './styled'

const SocialIcons: React.FC = () => {
	const { t } = useTranslation()

	return (
		<Wrapper>
			<VerticalText>{t('special.followMe')}</VerticalText>
			<Line />
			<Icon href="https://github.com/MartinaVilimova" target="_blank">
				<Github />
			</Icon>
			<Icon
				href="https://www.facebook.com/martina.vilimova.7/"
				target="_blank"
			>
				<Facebook />
			</Icon>
			<Icon
				href="https://www.linkedin.com/in/martinavilimova/"
				target="_blank"
			>
				<Linkedin />
			</Icon>
		</Wrapper>
	)
}

export default SocialIcons
