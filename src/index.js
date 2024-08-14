import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Samp from './Samp';
import Shop from './Shop';
import Prod from './Prod';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<h1>Please select one ...</h1>} />
                    <Route path="/Shop" element={<Shop />} >
                        <Route index element={<h1>Welcome to my shop</h1>} />
                        <Route path=":catid" element={<Prod />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
// npm install react-router-dom@6
