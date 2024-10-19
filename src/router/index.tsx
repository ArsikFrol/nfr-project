import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainPage from '../pages/MainPage'
import ConnectWalletPage from '../pages/ConnectWalletPage'

type Props = {}

const RouterComponent = (props: Props) => {

    const router = createBrowserRouter([
        { path: '*', element: <MainPage /> },
        { path: '/connectWallet', element: <ConnectWalletPage /> }
    ])

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default RouterComponent