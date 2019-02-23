import { createStore } from "redux";

export function setUser(user) {
    return {
        type: 'set_user',
        user
    }
}

export function setUserBenchmarkData(userBenchmarkData) {
    return {
        type: 'set_userBenchmarkData',
        userBenchmarkData
    }
}

export function setDingoBenchmarkData(dingoBenchmarkData) {
    return {
        type: 'set_dingoBenchmarkData',
        dingoBenchmarkData
    }
}

export function setFilter(filter) {
    return {
        type: 'set_filter',
        filter
    }
}
