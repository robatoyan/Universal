import { useEffect } from 'react';
// style
import './style.css';
// AOS
import Aos from 'aos';
import "aos/dist/aos.css";
// translations
import { useTranslation } from 'react-i18next';
// react router dom
import { Link } from 'react-router-dom';

export const Service = () => {
    useEffect(() => {
        Aos.init({})
    }, [])
    const [t, i18n] = useTranslation("global");

    return (
        <section className="services">
            <div className="container service">
                <div className="serviceData" data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="bottom-bottom">
                    <h2>{t("accessories")}</h2>
                    <p>{t("accessortext")}</p>
                    <Link to="/services" onClick={() => window.scrollTo(0, 0)} className='btn-link-service'>{t("readmore")}</Link>
                </div>
                <img src='/imgService/imgService.png' className='serviceImg' alt='imgService'
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="bottom-bottom" />
                <img src='/imgService/halfmoon.png' className='halfmoon1Service' alt='halfmoon' data-aos="fade-right" />
            </div>
        </section>
    )
}