import React from 'react'

import Header from '../components/Header/Header'
import Marketplace from '../components/Marketplace/Marketplace'

type Props = {
    singUp: boolean
}

const MarketplacePage = React.memo(function MarketplacePage(props: Props) {
    return (
        <div style={{ background: 'rgba(43, 43, 43, 1)' }}>
            <Header singUp={props.singUp} />
            <Marketplace />
        </div>
    )
})

export default MarketplacePage