import React from 'react'
import { Wrapper, Icon } from './styled'
import { Github, Facebook, Linkedin } from '@styled-icons/boxicons-logos/'

const SocialLinks: React.FC = () => (
	<Wrapper>
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

export default SocialLinks
