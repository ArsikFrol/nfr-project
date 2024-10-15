const defaultAllUser = []

const allUcer = (state = defaultAllUser, action) => {
    switch (action.type) {
        case 'OPEN_SITE':
            return { ...state, users: action.payload }
        default:
            return { ...state }
    }
}

export default allUcer