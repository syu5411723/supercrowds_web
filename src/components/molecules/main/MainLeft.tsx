import React from 'react'
import styled from "styled-components"
import AnimateLine from '../../atoms/main/left/AnimateLine'
import Line from '../../atoms/main/left/Line'
import SideBg from '../../atoms/main/left/SideBg'
import SideText from '../../atoms/main/left/SideText'

const Container = styled.div`
    position:fixed;
    top:50%;
    left: -4.5%;
    transform: rotate(90deg);

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
            <AnimateLine leftOpen={leftOpen} top="0" bottom="0" />
            <Container
            >
                <TextWrapper
                    onMouseLeave={handleChange}
                    onMouseEnter={handleChange}
                >
                    <SideText />
                </TextWrapper>
                <Line top="10px" bottom="0px" leftOpen={leftOpen} />
            </Container>
        </>
    )
}

export default MainLeft
