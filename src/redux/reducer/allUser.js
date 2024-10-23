const defaultAllUser = [

]

const allUser = (state = defaultAllUser, action) => {
    switch (action.type) {
        case 'OPEN_SITE_USERS':
            return { ...state, users: action.payload }
        case 'OPEN_SITE_COLLECTION':
            return { ...state, collection: action.payload }
        case 'OPEN_SOLD_NFT':
            return { ...state, soldNFT: action.payload }
        case 'OPEN_SOLD_COLLECTION':
            return { ...state, soldCollection: action.payload }
        case 'SORT_LOUPE':
            return { ...state, soldNFT: action.payload }
        case 'SORT_LOUPE_COLLECTION':
            return { ...state, soldCollection: action.payload }
        default:
            return { ...state }
    }
}

export default allUser