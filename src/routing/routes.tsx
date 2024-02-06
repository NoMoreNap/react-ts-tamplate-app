import React from 'react'

import {Navigate, Routes, Route } from 'react-router-dom'
import {MainLoginPage} from "../pages/login";
import {ProtectedRoute} from "./protected-route";
import {MainPage} from "../pages/main";
import {SimpleSearch}  from "../pages/simpleSearch"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<ProtectedRoute redirectPath='/registration' />} >
                <Route path="/main" element={<MainPage />} />
            </Route>
            <Route path='/' element={<Navigate to='/simple_search' replace={true}/>}/>
            <Route path="/simple_search" element={<SimpleSearch/>}/>
            <Route path="/registration" element={<MainLoginPage />}/>
        </Routes>
    )
}