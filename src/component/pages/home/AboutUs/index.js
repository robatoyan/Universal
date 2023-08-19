import { useEffect } from 'react';
// ----- react router dom
import { Link } from 'react-router-dom';
// style
import './style.css';
// Aos
import Aos from 'aos';
import "aos/dist/aos.css";
// translations
import { useTranslation } from 'react-i18next'


export const AboutUs = () => {
    useEffect(() => {
        Aos.init({})
    }, [])
    const [t, i18n] = useTranslation("global");

    return (
        <section className="ourAboutUs">
            <div className="container aboutUs"
                data-aos="fade-down-right"
                data-aos-duration="2000">
                <div className="aboutData">
                    <h2>{t('firstinarmenia')}</h2>
                    <p>{t('textData')}</p>
                    <Link to="/aboutUs" onClick={() => window.scrollTo(0, 0)} className='about-link'>{t('readmore')}</Link>
                </div>
                <img src="/AboutUs/Aboutimg1.png" className='aboutImg' alt='AboutImg' />
                <img src='/AboutUs/halfmoon.png' className='halfmoonAboutUs' alt='halFmoon'
                    data-aos="fade-down-left"
                    data-aos-duration="2000" />
            </div>
        </section>
    )
}