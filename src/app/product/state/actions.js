import * as ActionTypes from "./action-types";

import * as api from "./api";

export function initProducts(products) {
    return {
        type: ActionTypes.INIT_PRODUCTS,
        payload: {
            products,
        }
    }
}

export function loading (status) {
    return {
        type: ActionTypes.LOADING,
        payload: {
            loading: status
        }
    }
}


export function initError(error) {
    return {
        type: ActionTypes.INIT_ERROR,
        payload: {
            error,
        }
    }
}

//handeling ajax/async in Redux
// thunk as a middleware
// as per thunk design,
// return function as an action
export function getProductsFromServer(){

    console.warn("get products action creator");

    // dispatch and getState passed by thunk
    return function(dispatch, getState) {
        // all async/ajax code here
        console.log("called by thunk");

        //cache the data
        let state = getState();
        if(state.product.products.length > 0){
            console.log("Data already cached, no api call required");
            return;
        }

        
        dispatch(loading(true));

        api.getProducts()
        .then( products => {
            console.log("got products ", products);
            
            dispatch(loading(false));
            // initialise products in store
            dispatch(initProducts(products));
        });
    }
}