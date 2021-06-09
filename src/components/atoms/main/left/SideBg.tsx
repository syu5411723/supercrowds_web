import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const BgWrapper = styled(motion.div)`
    background-color: #333;
    width:100%;
    height:100%;
    position:fixed;
` 
const wrapperV = {
    closed: {x: "-100%"},
    open: {x: "-70%", transition: {duration: 0.3,}},
}

const SideBg = ({leftOpen}) => {
    return (
        <>

            <BgWrapper 
                variants={wrapperV}
                animate={leftOpen ? "open" : "closed"}
            />
        </>
    )
}

export default SideBg
