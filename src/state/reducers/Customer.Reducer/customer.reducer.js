import { customerConstants } from "../actions/constant";

const initState = {
    allCustomers: [],
    status: 'idle',
    error: {},
};

export const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case customerConstants.DELETE_CUSTOMERS_PENDING:
            return (state = { 
                ...state,
                status: 'loading'
             });
        case customerConstants.DELETE_CUSTOMERS_SUCCESS:
            return (state = {
                ...state,
                status: 'idle',
                allCustomers: action.payload.allCustomers,
            });
        default:
            return { ...state };
    }
};
