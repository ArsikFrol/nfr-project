import React from 'react'

import Header from '../components/Header/Header'
import NFT from '../components/NFT/NFT'

type Props = {
    singUp: boolean
}

const MagicMashroomsPage = React.memo(function MagicMashroomsPage(props: Props) {
    return (
        <div style={{ background: 'rgba(43, 43, 43, 1)', paddingBottom: '100px' }}>
            <Header singUp={props.singUp} />
            <NFT />
        </div>
    )
})

export default MagicMashroomsPage