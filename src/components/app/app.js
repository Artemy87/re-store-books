import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage, CartPage } from "../pages";
import ShopHeader from '../shop-header'

import styles from './app.module.css';


const App = () => {
    return (
      <main role='main' className='container'>
        <ShopHeader numItems={5} total={200}/>
        <Routes>
          <Route path='/'
                 element={<HomePage />} />
          <Route path='/cart'
                 element={<CartPage />} />
          <Route path='*'
                 element={<HomePage />} />
        </Routes>
      </main>
    )
}

export default (App);

