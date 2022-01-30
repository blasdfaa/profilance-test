import { createSelector } from '@reduxjs/toolkit';

export const selectNewsItems = (state) => state.NEWS.entities;

export const searchedNewsSelector = createSelector(
    [selectNewsItems, (_state, newsTitle) => newsTitle],
    (news, searchingTitle) => {
        const searchValue = searchingTitle.toLowerCase();
        const searchResult = news.filter((item) => item.title.toLowerCase().includes(searchValue));
        const sortedSearchResult = searchResult.sort(
            (a, b) =>
                a.title.toLowerCase().indexOf(searchValue) -
                b.title.toLowerCase().indexOf(searchValue),
        );

        return sortedSearchResult;
    },
);
