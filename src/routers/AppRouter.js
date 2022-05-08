import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from '../components/Cart';
import BmiCalculator from '../components/BmiCalculator';
import Gallery from '../components/Gallery';

function AppRouter() {
    return (

        <BrowserRouter>
            <div>
            <Routes>
                <Route path="/" element={<Cart/>} exact="true"></Route>
                <Route path="/bmi-calculator" element={<BmiCalculator/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
            </Routes>
            </div>
        </BrowserRouter>
    );
    
};

export default AppRouter;