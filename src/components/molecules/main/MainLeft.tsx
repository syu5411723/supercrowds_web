import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

import AnimateLine from '../../atoms/main/left/AnimateLine'
import Line from '../../atoms/main/left/Line'
import SideBg from '../../atoms/main/left/SideBg'
import SideText from '../../atoms/main/left/SideText'

const Container = styled.div`
    position:fixed;
    top:50%;
    left: -6.5%;
    transform: rotate(90deg);
    z-index: 2;

`
const Links = styled(Link)`
    color: #333;
`
const TextWrapper = styled.div`
    cursor: pointer;
`

const MainLeft = () => {
    const [leftOpen, setLeftOpen] = React.useState(false);
    const handleChange = () => {
        setLeftOpen(!leftOpen);
    }
    return (
        <>
            <SideBg
                leftOpen={leftOpen}
            />
            <AnimateLine leftOpen={leftOpen} top="6px" bottom="0" />
            <Links to="/we_do">
                <Container
                >
                    <TextWrapper
                        onMouseLeave={handleChange}
                        onMouseEnter={handleChange}
                    >
                        <SideText  leftOpen={leftOpen}/>
                    </TextWrapper>
                    <Line top="10px" bottom="0px" leftOpen={leftOpen} />
                </Container>
            </Links>
        </>
    )
}

export default MainLeft
