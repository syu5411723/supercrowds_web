import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const BgWrapper = styled(motion.div)`
    background-color: #999;
    width:100%;
    height:100%;
    position:fixed;
    top: 0;
    right:100%;
    z-index:1;
` 
const wrapperV = {
    closed: {x: "0%"},
    open: {x: "30%", transition: {duration: 0.3,}},
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
