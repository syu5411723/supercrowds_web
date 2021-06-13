import { motion } from 'framer-motion'
import React from 'react'

import ChangeLink from '../atoms/design/ChangeLink'
import Main from '../templates/Main'
import MainLeft from '../molecules/main/MainLeft'
import MainRight from '../molecules/main/MainRight'
import Header from '../templates/Header'



const Home = () => {
    return (
        <>
            <Header color="#000" />
            <ChangeLink />
            <MainLeft color="#333" />
            <MainRight />
        </>
    )
}

export default Home
