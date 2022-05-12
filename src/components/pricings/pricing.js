import './pricing.css'
import React from 'react'
import { useTranslation} from "react-i18next";

export const Pricing = () => {
    const { t } = useTranslation();
    return (
        <div className = {'pricing-container'}>
            <div className ={'free'} align ='center'>
                <p className = 'grande'>{t('Free')}</p>
                <h3 className ={'card-text'}> {t('Basic_package')}</h3>
                <p className = 'grande'>  $ 0.00</p>
                <button className ={'button-shape green'}>Select</button>
            </div>
            <div className ={'pro'} align ='center'>
                <p className = 'grande'>{t('Pro')}</p>
                <h3 className ={'card-text'}> {t('Pro_package')}</h3>
                <p className = 'grande'>  $ 10.00</p>
                <button className ={'button-shape cyan'}>Select</button>
            </div>
            <div className ={'pro-plus'} align ='center'>
                <p className = 'grande'>{t("Business")}</p>
                <h3 className ={'card-text'}>{t('Business_package')} </h3>
                <p className = 'grande'> $32.00</p>
                <button className ={'button-shape blue'}>Select</button>
            </div>
        </div>
    )
}
