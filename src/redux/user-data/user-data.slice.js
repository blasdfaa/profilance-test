import { createSlice } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../../constants';
import { getDataFromStorage, removeDataFromStorage, setDataToStorage } from '../../utils/storage';

const USER_DATA_STORAGE_KEY = 'user-data';

let initialState = {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userName: null,
};

const userDataStorageState = getDataFromStorage(USER_DATA_STORAGE_KEY) || null;

if (userDataStorageState) {
    initialState = userDataStorageState;
}

const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        requireLogin: (state, action) => {
            state.authorizationStatus = AuthorizationStatus.AUTH;
            state.userName = action.payload;

            setDataToStorage(USER_DATA_STORAGE_KEY, state);
        },
        requireLogout: (state) => {
            state.authorizationStatus = AuthorizationStatus.NO_AUTH;
            state.userName = null;

            removeDataFromStorage(USER_DATA_STORAGE_KEY);
        },
    },
});

export const { requireLogin, requireLogout } = userDataSlice.actions;

export default userDataSlice.reducer;
