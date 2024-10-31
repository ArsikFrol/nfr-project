import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../components/Header/Header'
import DiscoverDigitalArt from '../components/DiscoverDigitalArt/DiscoverDigitalArt'
import TrendingCollection from '../components/TrendingCollection/TrendingCollection'
import TopCreators from '../components/TopCreators/TopCreators'
import BrowseCategories from '../components/BrowseCategories/BrowseCategories'
import DiscoverMore from '../components/DiscoverMore/DiscoverMore'
import HowInWorks from '../components/HowInWorks/HowItWorks'
import WeeklyDigest from '../components/WeeklyDigest/WeeklyDigest'
import MagicMashrooms from '../components/MagicMashrooms/MagicMashrooms'


type Props = {
    singUp: boolean
}

const MainPage = (props: Props) => {
    return (
        <div style={{ background: 'rgba(43, 43, 43, 1)', paddingBottom: '100px' }}>
            <Header singUp={props.singUp} />
            <DiscoverDigitalArt singUp={props.singUp} />
            <TrendingCollection />
            <TopCreators />
            <BrowseCategories />
            <DiscoverMore />
            <MagicMashrooms />
            <HowInWorks />
            <WeeklyDigest />
        </div>
    )
}

export default MainPage