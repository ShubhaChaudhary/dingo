const intialState = {
    filter: {},            // FIlter component data,
    userBenchmarkData: {}, // This is used to plot users data on charts
    dingoBenchmarkData: {} // This is dingo comparion data 

}

export default (state = intialState, action) => {
    switch (action.type) {
        case 'FILTER_DATA':
            return { ...state, filter: action.datafilter }
        case 'set_userBenchmarkData':
            return { ...state, userBenchmarkData: action.userBenchmarkData }
        case 'set_dingoBenchmarkData':
            return { ...state, dingoBenchmarkData: action.dingoBenchmarkData }
        default:
        return state

    }
}


