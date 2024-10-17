import React from 'react'

import Header from '../components/Header/Header'
import DiscoverDigitalArt from '../components/DiscoverDigitalArt/DiscoverDigitalArt'
import TrendingCollection from '../components/TrendingCollection/TrendingCollection'
import TopCreators from '../components/TopCreators/TopCreators'
import BrowseCategories from '../components/BrowseCategories/BrowseCategories'
import DiscoverMore from '../components/DiscoverMore/DiscoverMore'
import HowInWorks from '../components/HowInWorks/HowItWorks'

type Props = {}

const MainPage = (props: Props) => {
    return (
        <div style={{ background: 'rgba(43, 43, 43, 1)' }}>
            <Header />
            <DiscoverDigitalArt />
            <TrendingCollection />
            <TopCreators />
            <BrowseCategories />
            <DiscoverMore />
            <HowInWorks />
        </div>
    )
}

export default MainPage