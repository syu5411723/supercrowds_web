import React from 'react'
import MainLeft from '../molecules/main/MainLeft'
import PageBlack from '../atoms/design/PageBlack'
import Header from '../templates/Header'
import ChangeLink from '../atoms/design/ChangeLink'

const WeDo = () => {
    return (
        <>
            <Header color="#fff" />
            <PageBlack />
            <ChangeLink />
            <MainLeft />
        </>
    )
}

export default WeDo
