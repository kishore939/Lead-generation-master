// src/store.js
import { createStore } from 'redux';
import leadReducer from './client/reducers';

const store = createStore(leadReducer);

export default store;
