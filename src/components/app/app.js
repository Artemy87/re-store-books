import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage, CartPage } from "../pages";

import styles from './app.module.css';


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/card' element={<CartPage />} />
            <Route path='*' element={<HomePage />} />
        </Routes>
    )
}

export default (App);

