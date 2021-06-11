import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import AnimateLine from '../../atoms/main/right/AnimateLine'
import Line from '../../atoms/main/right/Line'
import SideBg from '../../atoms/main/right/SideBg'
import SideText from '../../atoms/main/right/SideText'

const Container = styled.div`
    position:fixed;
    top:50%;
    right: -6%;
    transform: rotate(90deg);
    z-index: 2;

`
const Links = styled(Link)`
    color: #333;
`
const TextWrapper = styled.div`
    cursor: pointer;
`

const MainRight = () => {
    const [isOpen, setOpen] = React.useState(false);
    const RightChange = () => {
        setOpen(!isOpen);
    }
    return (
        <>
            <SideBg
                isOpen={isOpen}
            />
            <AnimateLine top="20px" bottom="0" isOpen={isOpen}/>
            <Links to="/we_do" >
            <Container
            >
                <Line top="0" bottom="10px" isOpen={isOpen} />
                <TextWrapper
                    onMouseLeave={RightChange}
                    onMouseEnter={RightChange}
                >
                <SideText text="WHAT WE DO" isOpen={isOpen} />
                </TextWrapper>
            </Container>
            </Links>
        </>
    )
}

export default MainRight