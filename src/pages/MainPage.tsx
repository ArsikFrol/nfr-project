import React from 'react'

import Header from '../components/Header/Header'
import DiscoverDigitalArt from '../components/DiscoverDigitalArt/DiscoverDigitalArt'
import TrendingCollection from '../components/TrendingCollection/TrendingCollection'
import TopCreators from '../components/TopCreators/TopCreators'
import BrowseCategories from '../components/BrowseCategories/BrowseCategories'

type Props = {}

const MainPage = React.memo(function MainPage(props: Props) {
    return (
        <>
            <Header />
            <DiscoverDigitalArt />
            <TrendingCollection />
            <TopCreators />
            <BrowseCategories />
        </>
    )
})

export default MainPage