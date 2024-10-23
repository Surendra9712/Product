import React from 'react'
import {AppLink, AppText, AppTitle} from "../index";

export default function NotFound() {
    return (
        <div className="absolute insect-0 index--1 flex flex-column align-items-center justify-center">
            <AppTitle>404</AppTitle>
            <AppText textAlign='center'>Oops! The page you're looking for can't be found. Please check the URL or
                return to the <AppLink textDecoration='underline' to={''} color='info'>Homepage.</AppLink></AppText>
        </div>
    )
}
