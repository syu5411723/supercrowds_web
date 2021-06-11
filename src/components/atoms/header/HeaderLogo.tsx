import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Links = styled(Link)`
    text-decoration:none;
`


const HeaderLogo = ({color}) => {
    const Logo = styled.h2`
    font-size:22px;
    color:${color};
    letter-spacing:2px;
`
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
