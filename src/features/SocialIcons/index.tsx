import React from 'react'
import { Wrapper, VerticalText, Line, Icon } from './styled'
import {Github, Facebook, Linkedin} from '@styled-icons/boxicons-logos/'

const SocialIcons = () => {
    return (
        <Wrapper>
            <VerticalText>Follow Me</VerticalText>
            <Line />
            <Icon to='/https://github.com/MartinaVilimova' target='_blank'><Github /></Icon>
            <Icon to='/https://www.facebook.com/martina.vilimova.7/' target='_blank'><Facebook /></Icon>
            <Icon to='/https://www.linkedin.com/in/martinavilimova/' target='_blank'><Linkedin /></Icon>
        </Wrapper>
    )
}

export default SocialIcons