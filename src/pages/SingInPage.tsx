import React from 'react'

import Header from '../components/Header/Header'
import SingIn from '../components/SingIn/SingIn'

type Props = {
    singUp: boolean
}

const SingInPage = React.memo(function SingInPage(props: Props) {

    return (
        <div style={{ background: 'rgba(43, 43, 43, 1)', paddingBottom: '100px' }} >
            <Header singUp={props.singUp} />
            <SingIn />
        </div >
    )
})

export default SingInPage