import React from 'react'
import MainLeft from '../molecules/main/MainLeft'
import PageBlack from '../atoms/design/PageBlack'
import Header from '../templates/Header'
import ChangeLink from '../atoms/design/ChangeLink'

const WeDo = () => {
    return (
        <>
            <Header color="#fff" />
            <PageBlack bg="#000" />
            <ChangeLink />
            <MainLeft />
        </>
    )
}

export default WeDo
