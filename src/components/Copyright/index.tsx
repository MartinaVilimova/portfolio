import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyledLink } from 'styled/StyledLink/styled'
import { ColorfulText } from 'styled/ColorfulText/styled'
import { Text } from './styled'

const Copyright: React.FC = () => {
	const { t } = useTranslation()

	return (
		<Text>
			<span>Copyright &copy; 2021.</span>
			<span>
				&nbsp;{t('special.designed')}
				<StyledLink to="/">
					<ColorfulText>&nbsp;{t('special.name')}</ColorfulText>
				</StyledLink>
			</span>
		</Text>
	)
}
export default Copyright
