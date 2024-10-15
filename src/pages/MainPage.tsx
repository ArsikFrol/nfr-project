import React from 'react'

import Header from '../components/Header/Header'
import DiscoverDigitalArt from '../components/DiscoverDigitalArt/DiscoverDigitalArt'

type Props = {}

const MainPage = React.memo(function MainPage(props: Props) {
    return (
        <>
            <Header />
            <DiscoverDigitalArt />
        </>
    )
})

export default MainPage