import React from 'react'
import LanguageSelector from "../../locales/ChooseLanguage";
import { Trans, useTranslation } from "react-i18next";
import Carousel from '../carousel/Carousel';
import banner from '../../assets/banner1.webp'
import banner2 from '../../assets/banner2.webp'
import Features from '../features/Features';

const HeroSection = () => {


    return (
        <div className=''>
            <Carousel />
            <Features />
        </div>
    )
}

export default HeroSection