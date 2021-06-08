import React , {VFC}from 'react'
import styled from 'styled-components'
import HeaderInner from '../molecules/header/HeaderInner'

const HeaderContainer  = styled.div`
    position:fixed;
`


const Header:VFC = () => {
    return (
        <>
            <HeaderContainer>
                <HeaderInner />
            </HeaderContainer>
        </>
    )
}

export default Header
