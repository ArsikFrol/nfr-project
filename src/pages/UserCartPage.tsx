import React from 'react'
import { useSelector } from 'react-redux'

import UserCart from '../components/UserCart/UserCart'
import Header from '../components/Header/Header'

type Props = {
    index: number,
    singUp: boolean
}

const UserCartPage = React.memo(function UserCartPage(props: Props) {

    const users = useSelector((state: any) => state.allUser.users)
    const collections = useSelector((state: any) => state.allUser.collection)

    let newListUsers: any = []

    users.map((objUser: any) => {
        let collectionList: any = []
        let newObj = {
            id: objUser.id,
            purchasedCollections: collectionList,
            userName: objUser.userName,
            userImage: objUser.userImage,
            cartUser: objUser.cartUser,
        }
        objUser.purchasedCollections.map((titleColle: string) => {
            collections.map((objCollection: any) => {
                if (titleColle == objCollection.titleCollection) {
                    collectionList.push(objCollection.collectionImg['id1'])
                }

            })
        })
        newListUsers.push(newObj)

    })

    return (
        <div style={{ background: 'rgba(43, 43, 43, 1)' }}>
            <Header singUp={props.singUp} />
            <UserCart user={newListUsers[props.index - 1]} />
        </div>
    )
})

export default UserCartPage