const intialState = {
    filter: {},            // Filter component data,
}

export default (state = intialState, action) => {
    switch (action.type) {
        case 'FILTER_DATA':
            return { ...state, filter: action.datafilter }
        default:
        return state

    }
}


