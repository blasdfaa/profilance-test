import { createSlice } from '@reduxjs/toolkit';
import { generateMockNews } from '../../__mocks__/news';

const initialState = {
    entities: [
        generateMockNews(),
        generateMockNews(),
        generateMockNews(),
        generateMockNews(),
        generateMockNews(),
        generateMockNews(),
        generateMockNews(),
    ],
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
});

export default newsSlice.reducer;
