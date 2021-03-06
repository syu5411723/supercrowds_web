import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const BgWrapper = styled(motion.div)`
    background-color: #000;
    width:100%;
    height:100%;
    position:fixed;
    top: 0;
    left: 100%;
    z-index: 1;
` 
const wrapperV = {
    closed: {x: "0%"},
    open: {x: "-30%", transition: {duration: 0.3,}},
}

const SideBg = ({isOpen}) => {
    return (
        <>

            <BgWrapper 
                variants={wrapperV}
                animate={isOpen ? "open" : "closed"}
            />
        </>
    )
}

export default SideBg
