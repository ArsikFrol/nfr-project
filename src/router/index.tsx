import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainPage from '../pages/MainPage'
import ConnectWalletPage from '../pages/ConnectWalletPage'
import UserCartPage from '../pages/UserCartPage'
import SingInPage from '../pages/SingInPage'
import MarketplacePage from '../pages/MarketplacePage'
import RankingsPage from '../pages/RankingsPage'

type Props = {}

const RouterComponent = (props: Props) => {

    const router = createBrowserRouter([
        { path: '*', element: <MainPage /> },
        { path: '/connectWallet', element: <ConnectWalletPage /> },
        { path: '/singIn', element: <SingInPage /> },
        { path: '/marketplace', element: <MarketplacePage /> },
        { path: '/rankings', element: <RankingsPage /> },
        { path: '/user1', element: <UserCartPage index={1} /> },
        { path: '/user2', element: <UserCartPage index={2} /> },
        { path: '/user3', element: <UserCartPage index={3} /> },
        { path: '/user4', element: <UserCartPage index={4} /> },
        { path: '/user5', element: <UserCartPage index={5} /> },
        { path: '/user6', element: <UserCartPage index={6} /> },
        { path: '/user7', element: <UserCartPage index={7} /> },
        { path: '/user8', element: <UserCartPage index={8} /> },
        { path: '/user9', element: <UserCartPage index={9} /> },
        { path: '/user10', element: <UserCartPage index={10} /> },
        { path: '/user11', element: <UserCartPage index={11} /> },
        { path: '/user12', element: <UserCartPage index={12} /> }
    ])

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default RouterComponent