import React from 'react'

import Rankings from '../components/Rankings/Rankings'
import Header from '../components/Header/Header'

type Props = {
    singUp: boolean
}

const RankingsPage = React.memo(function RankingsPage(props: Props) {
    return (
        <div style={{ background: 'rgba(43, 43, 43, 1)', paddingBottom: '100px' }}>
            <Header singUp={props.singUp} />
            <Rankings />
        </div>
    )
})

export default RankingsPage