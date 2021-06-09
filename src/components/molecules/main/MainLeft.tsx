import React from 'react'
import styled from "styled-components"
import SideText from '../../atoms/main/SideText'
import LeftText from '../../atoms/main/SideText'

const Container = styled.div`
    position:fixed;
    top:50%;
    left: -5%;
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
    margin-top: 10px;
    background-color: rgba(1,1,1, 0.8);
`

const MainLeft = () => {
    const {isOpen, setOpen} = React.useState(false);
    return (
        <>
        <Container>
            <SideText text="WHO WE ARE" isOpen={isOpen} />
            <LineWrapper>
            <Line />
            </LineWrapper>
        </Container>
        </>
    )
}

export default MainLeft
