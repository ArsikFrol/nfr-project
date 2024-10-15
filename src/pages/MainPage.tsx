import React from 'react'

import Header from '../components/Header/Header'
import DiscoverDigitalArt from '../components/DiscoverDigitalArt/DiscoverDigitalArt'
import TrendingCollection from '../components/TrendingCollection/TrendingCollection'

type Props = {}

const MainPage = React.memo(function MainPage(props: Props) {
    return (
        <>
            <Header />
            <DiscoverDigitalArt />
            <TrendingCollection />
        </>
    )
})

export default MainPage