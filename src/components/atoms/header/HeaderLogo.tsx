import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Links = styled(Link)`

`
const Logo = styled.h2`
    font-size:30px;
`

const HeaderLogo = () => {
    return (
        <>
            <Links to="/">SUPERCROUDS</Links>
        </>
    )
}

export default HeaderLogo
