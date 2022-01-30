import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { AppRoute } from './constants';
import Home from './components/pages/home/home';
import NewsScreen from './components/pages/news-screen/news-screen';
import NotFoundScreen from './components/pages/not-found-screen/not-found-screen';
import store from './redux/store';

import './styles/index.scss';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={AppRoute.HOME} element={<Home />} />
                    <Route path={AppRoute.NEWS} element={<NewsScreen />} />
                    <Route path={AppRoute.NOT_FOUND} element={<NotFoundScreen />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
