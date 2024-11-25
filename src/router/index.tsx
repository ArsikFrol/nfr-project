import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from '../components/Header/Header'

type Props = {}

const RouterComponent = React.memo(function RouterComponent(props: Props) {

    const router = createBrowserRouter([
        { path: '*', element: <Header /> }
    ])

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
})

export default RouterComponent
