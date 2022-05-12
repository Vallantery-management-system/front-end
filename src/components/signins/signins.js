import React from 'react'
import './signins.css'
import {Link} from 'react-router-dom';
import { useTranslation} from "react-i18next";

export const Signins = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div align ='center' className ='flex-container'>
                <div className={'volunteer'}>
                <p className={'centered-text-1'}>{t("Volunteer_text")}</p>
                    <Link to = '/signup'><button id = {'inf'} className = {'buttone-blue central'} href ='#info'>Sign in as a volunteer</button></Link>
                </div>
                <div className ={'empty'}></div>
                <div className={'company'}>
                <p className={'centered-text-2'}>{t("Company_text")}</p>
                    <Link to = '/signup'><button id = {'inf'} className = {'buttone-blue central'} href ='#info'>Sign in as a company</button></Link>

                </div>
            </div>
        </div>
    )
}

