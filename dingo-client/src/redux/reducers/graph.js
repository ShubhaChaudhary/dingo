const INITIAL_STATE = {
    benchmark: [],
    performance: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ('BENCHMARK_DATUM'):
            return { ...state, benchmark: action.payload }
        case ('PERFORMANCE_DATUM'):
            return { ...state, performance: action.payload }
        default:
            return state
    }

}