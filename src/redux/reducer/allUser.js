const defaultAllUser = []

const allUser = (state = defaultAllUser, action) => {
    switch (action.type) {
        case 'OPEN_SITE_USERS':
            return { ...state, users: action.payload }
        case 'OPEN_SITE_COLLECTION':
            return { ...state, collection: action.payload }
        default:
            return { ...state }
    }
}

export default allUser