import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MenuWrapper = styled(Link)`
    display:flex;
    align-items:center;
    text-decoration:none;
`


const HeaderProject = ({color}) => {
    const MenuText = styled.h3`
    font-size:16px;
    letter-spacing:3px;
    color:${color};
`

    return (
        <>
            <MenuWrapper to="/">
                <MenuText>VIEW PROJECTS</MenuText>
            </MenuWrapper>
        </>
    )
}

export default HeaderProject
