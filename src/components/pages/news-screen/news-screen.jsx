import React from 'react';
import { useSelector } from 'react-redux';

import { searchedNewsSelector, selectNewsItems } from '../../../redux/news/news.selector';
import NewsList from '../../news-list/news-list';
import MainLayout from '../../ui/main-layout/main-layout';
import SearchField from '../../ui/search-field/search-field';

const NewsScreen = () => {
    const [searchValue, setSearchValue] = React.useState('');

    const newsItems = useSelector(selectNewsItems);
    const searchedNewsItems = useSelector((state) => searchedNewsSelector(state, searchValue));

    const handleChangeSearchValue = React.useCallback((e) => {
        setSearchValue(e.target.value);
    }, []);

    const handleClearSearchValue = React.useCallback((e) => {
        setSearchValue('');
    }, []);

    return (
        <MainLayout>
            <div className="container">
                <h1 className="visually-hidden">Новости</h1>
                <SearchField
                    value={searchValue}
                    onChangeValue={handleChangeSearchValue}
                    onClearValue={handleClearSearchValue}
                />
                <NewsList items={searchValue ? searchedNewsItems : newsItems} />
            </div>
        </MainLayout>
    );
};

export default NewsScreen;
