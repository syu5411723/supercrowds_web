import React from 'react'
import styled from "styled-components"
import SideBg from '../../atoms/main/SideBg'
import SideText from '../../atoms/main/SideText'

const Container = styled.div`
    position:fixed;
    top:50%;
    right: -5%;
    transform: rotate(90deg);
    cursor: pointer;
`
const LineWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`
const Line = styled.div`
    width:1px;
    height:15px;
    margin-bottom: 10px;
    background-color: rgba(1,1,1, 0.8);
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
            <Container
                onMouseEnter={RightChange}
                onMouseLeave={RightChange}
            >
                <LineWrapper>
                    <Line />
                </LineWrapper>
                <SideText text="WHAT WE DO" isOpen={isOpen} />
            </Container>
        </>
    )
}

export default MainRight