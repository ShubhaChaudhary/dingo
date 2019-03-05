// import { createStore } from 'redux'


// const intialState = {
//     user: {}, // user data

//     token: '',
//     tokenType: '',

//     filter: {},            // FIlter component data,
//     userBenchmarkData: {}, // This is used to plot users data on charts
//     dingoBenchmarkData: {} // This is dingo comparion data 

// }

const reducer = (state, action) => {
    switch (action.type) {
        case 'set_user':
            return { ...state, token: action.user }
        case 'set_token':
            return { ...state, toke: action.token }
        case 'set_tokenType':
            return { ...state, tokeType: action.tokenType }
        case 'set_filter':
            return { ...state, filter: action.filter }
        case 'set_userBenchmarkData':
            return { ...state, userBenchmarkData: action.userBenchmarkData }
        case 'set_dingoBenchmarkData':
            return { ...state, dingoBenchmarkData: action.dingoBenchmarkData }
    }
}

// export default createStore(reducer, intialState)

