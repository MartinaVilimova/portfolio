import React from 'react'
import web1 from '../../assets/web1.png'
import { Wrapper, HoverBox, Picture, IconButton, Subtitle } from './styled'
import { Link, Search } from '@styled-icons/feather'

const ItemMyWork: React.FC = () => (
        <Wrapper>
            <Picture src={web1} />
            <HoverBox>
                <IconButton>
                    <Link />
                </IconButton>
                <IconButton>
                    <Search />
                </IconButton>
                <Subtitle>Auto od strejdy</Subtitle>
            </HoverBox>
        </Wrapper>
)

export default ItemMyWork
