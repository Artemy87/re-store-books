import React from 'react';
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

import App from './components/app';
import ErrorBoundry from "./components/error-boundry";
import BookstoreService from "./services/bookstore-service"; // Доступ к данным
import {BookstoreServiceProvider} from "./components/bookstore-service-context"; // Для доступа компонентов к BookstoreService
import store from './store'; // Для управления данными


const bookstoreService = new BookstoreService();

// <Provider store={store}>   - Redux компонент. Делает store доступным для всех вложенных компонентов.
// <BookstoreServiceProvider value={bookstoreService}>   - Доступ к данным "bookstoreService" через provider
ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);