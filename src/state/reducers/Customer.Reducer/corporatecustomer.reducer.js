import { corporatecustomerConstants } from "../../actions/constant";

const initState = {
    allCoporatecustomers: [],
    status: 'idle',
    error: {},
};

export const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case corporatecustomerConstants.GET_CORPORATECUSTOMERS_PENDING:
            return (state = { 
                ...state,
                status: 'loading'
             });
        case corporatecustomerConstants.GET_CORPORATECUSTOMERS_SUCCESS:
            return (state = {
                ...state,
                status: 'idle',
                allCoporatecustomers: action.payload.allCoporatecustomers,
            });
        default:
            return { ...state };
    }
};
