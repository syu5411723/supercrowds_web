import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'


const BeforeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #333;
`
const AfterContainer = styled(motion.div)`
    position:fixed;
    top:0;
    left: 0;
    background-color:#000;
    width:100vw;
    height: 100vh;
`
const contaienrV = {
    hidden: {x: "100vw"},
    visible: {x: "0vw", transition: {duration: 1.3}}
}

const PageBlack = () => {
    return (
        <>
            <BeforeContainer />
            <AfterContainer
                variants={contaienrV}
                initial="hidden"
                animate="visible"
            />
        </>
    )
}

export default PageBlack
