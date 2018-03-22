export default function loggerMiddleware(store) {
    console.warn("Outer logger", store);

    return function(next){
        console.warn("inner next");

        //called for every dispatch
        return function(action){
            console.warn("LOGGER ",action, typeof action);
            let result;

            // next: forward action to next middleware or reducers
            result = next(action);

            return result;
        }
    }
}