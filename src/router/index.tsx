import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useSelector } from 'react-redux'

import MainPage from '../pages/MainPage'
import ConnectWalletPage from '../pages/ConnectWalletPage'
import UserCartPage from '../pages/UserCartPage'
import SingInPage from '../pages/SingInPage'
import MarketplacePage from '../pages/MarketplacePage'
import RankingsPage from '../pages/RankingsPage'


type Props = {}

const RouterComponent = (props: Props) => {

    const singUp = useSelector((state: any) => state.allUser.createAccount)

    const router = createBrowserRouter([
        { path: '*', element: <MainPage singUp={singUp} /> },
        { path: '/connectWallet', element: <ConnectWalletPage singUp={singUp} /> },
        { path: '/singIn', element: <SingInPage singUp={singUp} /> },
        { path: '/marketplace', element: <MarketplacePage singUp={singUp} /> },
        { path: '/rankings', element: <RankingsPage singUp={singUp} /> },
        { path: '/user1', element: <UserCartPage index={1} singUp={singUp} /> },
        { path: '/user2', element: <UserCartPage index={2} singUp={singUp} /> },
        { path: '/user3', element: <UserCartPage index={3} singUp={singUp} /> },
        { path: '/user4', element: <UserCartPage index={4} singUp={singUp} /> },
        { path: '/user5', element: <UserCartPage index={5} singUp={singUp} /> },
        { path: '/user6', element: <UserCartPage index={6} singUp={singUp} /> },
        { path: '/user7', element: <UserCartPage index={7} singUp={singUp} /> },
        { path: '/user8', element: <UserCartPage index={8} singUp={singUp} /> },
        { path: '/user9', element: <UserCartPage index={9} singUp={singUp} /> },
        { path: '/user10', element: <UserCartPage index={10} singUp={singUp} /> },
        { path: '/user11', element: <UserCartPage index={11} singUp={singUp} /> },
        { path: '/user12', element: <UserCartPage index={12} singUp={singUp} /> }
    ])

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default RouterComponent