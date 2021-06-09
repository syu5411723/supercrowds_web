import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MenuIcon from '../design/MenuIcon'

const MenuWrapper = styled(Link)`
    display:flex;
    align-items:center;
    text-decoration:none;
`
const MenuText = styled.h3`
    font-size:16px;
    letter-spacing:10px;
    color: #333;
`


const HeaderMenu = () => {
    return (
        <>
            <MenuWrapper to="/">
                <MenuIcon />
                <MenuText>MENU</MenuText>
            </MenuWrapper>
        </>
    )
}

export default HeaderMenu
