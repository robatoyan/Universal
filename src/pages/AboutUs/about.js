import { useEffect } from 'react';
// style
import './about.css';
// aos
import Aos from 'aos';
import "aos/dist/aos.css";
// translations
import { useTranslation } from 'react-i18next';

export const About = () => {
    useEffect(() => {
        Aos.init({})
    }, [])

    const [t, i18n] = useTranslation("global");

    return (
        <div className="aboutUsDataPage">
            <h2>{t("aboutUs")}</h2>
            <div className='container about'>
                <div data-aos="fade-right"
                    data-aos-duration="2000">
                    <img src='/AboutUs/Aboutimg2.png' alt='aboutUs' className='aboutUsimg' />
                    <p >
                        {t("aboutUsData")}
                    </p>
                </div>
                <div data-aos="fade-left"
                    data-aos-duration="2000">
                    <p>{t("aboutUsData")}</p>
                    <img src='/AboutUs/Aboutimg3.png' alt='aboutUs' className='aboutUsimg' />
                </div>
                <img src='/AboutUs/halfmoon1.png' className='halfmoon4About' data-aos="fade-right" data-aos-duration="2000" />
                <img src='/AboutUs/halfmoon2.png' className='halfmoon5About' data-aos="fade-left" data-aos-duration="2000" />
            </div>
        </div>
    )
}