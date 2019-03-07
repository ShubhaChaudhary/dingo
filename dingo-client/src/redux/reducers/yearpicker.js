import moment from "moment";

const INITIAL_STATE = {

    year: {
        min:  moment().format('YYYY')-3,
        max: moment().format('YYYY'),
      },

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ('YEAR_RANGE'):
            return { ...state, year: action.value}
        default:
            return state
    }

}