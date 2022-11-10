import {
    CARTORDER_DELIVERED_FAIL,
    CARTORDER_DELIVERED_REQUEST,
    CARTORDER_DELIVERED_SUCCESS,
    CARTORDER_DETAILS_FAIL,
    CARTORDER_DETAILS_REQUEST,
    CARTORDER_DETAILS_SUCCESS,
    CARTORDER_LIST_FAIL,
    CARTORDER_LIST_REQUEST,
    CARTORDER_LIST_SUCCESS,
    CARTORDER_DELETE_REQUEST,
    CARTORDER_DELETE_SUCCESS,
    CARTORDER_DELETE_FAIL,
    CARTORDER_APPROVED_REQUEST,
    CARTORDER_APPROVED_FAIL,
    CARTORDER_APPROVED_SUCCESS,
    CARTORDER_APPROVED_RESET
} from "../constants/CartOrderConstants";
import { logout } from "./userActions";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastObjects } from "./toastObject";

export const listCartOrders = () => async (dispatch, getState) => {
    try {
        dispatch({ type: CARTORDER_LIST_REQUEST });

        const { data } = await axios.get(`/cartitems/all`);

        dispatch({ type: CARTORDER_LIST_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: CARTORDER_LIST_FAIL,
            payload: message,
        });
    }
};

// ORDER DETAILS
export const getCartOrderDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: CARTORDER_DETAILS_REQUEST });
        const { data } = await axios.get(`/cartitems/find/${id}`);
        dispatch({ type: CARTORDER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: CARTORDER_DETAILS_FAIL,
            payload: message,
        });
    }
};

// // Set Order Delivered
// export const deliverCartOrder = (orderId) => async (dispatch, getState) => {
//     try {
//         dispatch({ type: CARTORDER_DELIVERED_REQUEST });

//         const response = await axios.put(
//             `/cartitems/delivered/${orderId}`
//         );

//         const responseData = response.data;

//         if (!responseData.success) {
//             toast.error(responseData.message, ToastObjects);
//         } else {
//             toast.success(responseData.message, ToastObjects);
//             dispatch({ type: CARTORDER_DELIVERED_SUCCESS });
//             dispatch({ type: CARTORDER_DETAILS_SUCCESS, payload: responseData });
//         }



//     } catch (error) {
//         const message =
//             error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message;
//         if (message === "Not authorized, token failed") {
//             dispatch(logout());
//         }
//         dispatch({
//             type: CARTORDER_DELIVERED_FAIL,
//             payload: message,
//         });
//     }
// };

export const approveCartOrder = (orderId) => async (dispatch, getState) => {
    try {
        dispatch({ type: CARTORDER_APPROVED_REQUEST });

        const response = await axios.put(
            `/cartitems/approved/${orderId}`
        );

        const responseData = response.data;

        if (!responseData.success) {
            toast.error(responseData.message, ToastObjects);
        } else {
            toast.success(responseData.message, ToastObjects);
            dispatch({ type: CARTORDER_APPROVED_SUCCESS });
            dispatch({ type: CARTORDER_DETAILS_SUCCESS, payload: responseData });
        }



    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: CARTORDER_APPROVED_FAIL,
            payload: message,
        });
    }
};


// // Delete Product
// export const deleteCartOrder = (id) => async (dispatch, getState) => {

//     try {
//         dispatch({ type: CARTORDER_DELETE_REQUEST });

//         const response = await axios.delete(`/cartitems/${id}`);

//         const responseData = response.data;

//         if (!responseData.success) {
//             toast.error(responseData.message, ToastObjects);
//         } else {
//             toast.success(responseData.message, ToastObjects);
//             dispatch({ type: CARTORDER_DELETE_SUCCESS });
//         }
//     } catch (error) {
//         const message =
//             error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message;
//         if (message === "Not authorized, token failed") {
//             dispatch(logout());
//         }

//         toast.error(message, ToastObjects);

//         dispatch({
//             type: CARTORDER_DELETE_FAIL,
//             payload: message,
//         });
//     }
// };