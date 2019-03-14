// Reducer for Graph,
const INITIAL_STATE = {
    benchmark: [],
    performance: [],
    tab: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ('BENCHMARK_DATUM'):
            return { ...state, benchmark: action.payload }
        case ('PERFORMANCE_DATUM'):
            return { ...state, performance: action.payload }
        case ('TAB_SELECTION'):
            return { ...state, tab: action.payload }
        default:
            return state
    }

}