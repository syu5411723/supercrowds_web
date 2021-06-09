import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Links = styled(Link)`
    text-decoration:none;
`
const Logo = styled.h2`
    font-size:22px;
    color:#333;
    letter-spacing:2px;
`

const HeaderLogo = () => {
    return (
        <>
            <Links to="/">
                <Logo>
                    SUPERCROUDS
                </Logo>
            </Links>
        </>
    )
}

export default HeaderLogo
