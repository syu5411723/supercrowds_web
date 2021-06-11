import React , {VFC}from 'react'
import styled from 'styled-components'
import HeaderInner from '../molecules/header/HeaderInner'

const HeaderContainer  = styled.div`
    position:fixed;
    width:100%;
    height: 80px;
    z-index: 5;
    color: #000;
`


const Header:VFC = ({color}) => {
    return (
        <>
            <HeaderContainer>
                <HeaderInner  color={color}/>
            </HeaderContainer>
        </>
    )
}

export default Header
