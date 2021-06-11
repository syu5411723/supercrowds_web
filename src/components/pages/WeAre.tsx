import React from 'react'

import MainLeft from '../molecules/main/MainLeft'
import MainRight from '../molecules/main/MainRight'
import PageBlack from '../atoms/design/PageBlack'
import Header from '../templates/Header'


const WeAre = () => {
    return (
        <>
            <Header color="#000" />
            <PageBlack bg="#fff" />
            <MainRight/>
        </>
    )
}

export default WeAre
