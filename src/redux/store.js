import { configureStore } from '@reduxjs/toolkit';

import userDataReducer from './user-data/user-data.slice';
import newsReducer from './news/news.slice';

const reducer = {
    USER_DATA: userDataReducer,
    NEWS: newsReducer,
};

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
