import { createStore } from "redux";
import {payloadDataReducer }from "../Redux/actions";

const store = createStore(payloadDataReducer);

export default store;
