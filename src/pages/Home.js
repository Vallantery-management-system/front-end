import React from "react";
import { Link } from "react-router-dom";
import {Header} from '../components/Header'

export const Home = () => {
    return (
        <div>
            <Header />
            <Link to = '/login'>Log in here</Link>
            <p></p>
            <Link to = '/privacy'>Privacy Policy</Link>
        </div>
    )
}