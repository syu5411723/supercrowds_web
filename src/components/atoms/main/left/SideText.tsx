import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``
const Text = styled(motion.h3)`
    font-size: 14px;
    letter-spacing:5px;
`
const textV = {
    closed: {color: "#333"},
    open: {color: "#000"},
}

const SideText = ({leftOpen}) => {
    return (
        <>
                <Wrapper>
                    <Text
                        variants={textV}
                        animate={leftOpen ? "open" : "closed" }
                    >WHO WE ARE</Text>
                </Wrapper>
        </>
    )
}

export default SideText