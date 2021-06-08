import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MenuWrapper = styled(Link)`
    display:flex;
    align-items:center;
`
const MenuSvg = styled.svg``
const MenuPath = styled.path`
`
const MenuText = styled.h3`
    font-size:20px;
`


const HeaderMenu = () => {
    return (
        <>
            <MenuWrapper to="/">
                <MenuSvg>
                    <MenuPath>
                    </MenuPath>
                </MenuSvg>
                <MenuText>MENU</MenuText>
            </MenuWrapper>
        </>
    )
}

export default HeaderMenu
