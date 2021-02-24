import React from 'react'
import Toggle from '../../components/Toggle'
import { Wrapper, Content, BoxShadowInset, HiddenBox, Icon } from './styled'

const SettingsBox: React.FC = () => {

    return (
        <Wrapper>
            <Content></Content>
            <BoxShadowInset>
            <HiddenBox></HiddenBox>
            <Icon></Icon>
            </BoxShadowInset>
        </Wrapper>
    )
}

{/* 
    <Toggle
				isChecked={theme === Theme.Dark}
				onChange={(checked) =>
					setTheme(checked ? Theme.Dark : Theme.Light)
				}
			/> */}

export default SettingsBox
