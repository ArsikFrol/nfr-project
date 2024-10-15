import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainPage from '../pages/MainPage'

type Props = {}

const RouterComponent = React.memo(function RouterComponent(props: Props) {

    const router = createBrowserRouter([
        { path: '*', element: <MainPage /> },/* 
        {path: '', element: } */
    ])

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
})

export default RouterComponent