import './description.css';
import React from 'react'
import { useTranslation} from "react-i18next";



export default function Description() {
    const { t } = useTranslation();

    return (
        <div className={'container'}>
            <p class="line-1 anim-typewriter">{t('Slogan_1')}</p>
            <p class="line-1 anim-typewriter-2">{t('Slogan_2')}</p>
        </div>
    )
}
