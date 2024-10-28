import React from 'react'

import Header from '../components/Header/Header'
import ConnectWallet from '../components/ConnectWallet/ConnectWallet'

type Props = {
    singUp: boolean
}

const ConnectWalletPage = React.memo(function ConnectWalletPage(props: Props) {
    return (
        <div style={{ background: 'rgba(43, 43, 43, 1)', paddingBottom: '100px' }}>
            <Header singUp={props.singUp} />
            <ConnectWallet />
        </div>
    )
})

export default ConnectWalletPage