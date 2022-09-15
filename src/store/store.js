import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { setLocalStorage } from "@utils/localeStorage";
import rootReducer from "./reducers"
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
    )
store.subscribe(()=>{
    // store.getState().favoriteReducer
    setLocalStorage('store',  store.getState().favoriteReducer)
})

export default store