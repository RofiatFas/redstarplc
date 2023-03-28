// import axiosInstance from "../../utils/axios";
import axiosInstance from "../../../utils/axios";
import { corporatecustomerConstants } from "../constant";
import { constants } from "../../../utils/constants";

const baseUrl = constants.baseUrl
const axiosConfig = constants.axiosConfig

export const getCorporatecustomer = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: corporatecustomerConstants.GET_CORPORATECUSTOMERS_PENDING,
            });
            const res = await axiosInstance.get(`${baseUrl}/Customer/corpCustomers`);
            console.log("res", res);
            if (res.status === 200) {
                dispatch({
                    type: corporatecustomerConstants.GET_CORPORATECUSTOMERS_SUCCESS,
                });
            }
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: corporatecustomerConstants.GET_CORPORATECUSTOMERS_FAILURE,
                payload: { message: error.message },
            });
        }
    };
};

// export const getCustomer = () => {
//     return async (dispatch) => {
//         try {
//             dispatch({
//                 type: customerConstants.GET_CUSTOMERS_PENDING,
//             });
//             const res = await axiosInstance.get(`${baseUrl}/Customer/customer`);
//             console.log("res", res);
//             if (res.status === 200) {
//                 dispatch({
//                     type: customerConstants.GET_CUSTOMERS_SUCCESS,
//                 });
//                 alert("Delete Successfull")
//             }
//         } catch (error) {
//             console.log("error", error);
//             dispatch({
//                 type: customerConstants.GET_CUSTOMERS_FAILURE,
//                 payload: { allCustomers: error.message },
//             });
//         }
//     };
// };