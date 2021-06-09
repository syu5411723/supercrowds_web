import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``
const Text = styled(motion.h3)`
    font-size: 14px;
    letter-spacing:5px;
`

const SideText = () => {
    return (
        <>
                <Wrapper>
                    <Text>WHO WE ARE</Text>
                </Wrapper>
        </>
    )
}

export default SideText