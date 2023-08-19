import { useState } from 'react';
// style
import './header.css';
// react router dom
import { Link, useLocation } from 'react-router-dom';
// translations
import { useTranslation } from 'react-i18next'

export const Header = () => {
    const [t, i18n] = useTranslation("global");
    
    const [languages, setLanguage] = useState([
        { id: 1, img: "/imgLanguage/Armenia.jpg", code: 'am' },
        { id: 2, img: "/imgLanguage/America.svg", code: 'en' }
    ])

    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    const [showLanguage, setShowLanguage] = useState(false);

    const [btnMenuBars, setMenuBars] = useState(false);

    const location = useLocation();

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };



    return (
        <header>
            <div className='container header-menu'>
                <Link to="/"><img src="/imgLogo/logo.png" className='logoImge' /></Link>
                <i className="fa fa-bars" aria-hidden="true" onClick={() => setMenuBars(true)}></i>
                <ul className='headerLinks '>
                    <li onClick={() => window.scrollTo(0, 0)} className={location.pathname == '/' ? "liactiv" : "noactivli"}><Link to="/">{t('home')}</Link></li>
                    <li onClick={() => window.scrollTo(0, 0)} className={location.pathname == '/aboutUS' ? "liactiv" : "noactivli"}><Link to="/aboutUS">{t('aboutUs')}</Link></li>
                    <li onClick={() => window.scrollTo(0, 0)} className={location.pathname == '/product' ? "liactiv" : "noactivli"}><Link to="/product">{t('product')}</Link></li>
                    <li onClick={() => window.scrollTo(0, 0)} className={location.pathname == '/services' ? "liactiv" : "noactivli"}><Link to="/services">{t('service')}</Link></li>
                    <li onClick={() => window.scrollTo(0, 0)} className={location.pathname == '/coWorker' ? "liactiv" : "noactivli"}><Link to="/coWorker">{t('co-workers')}</Link></li>
                    <li onClick={() => window.scrollTo(0, 0)} className={location.pathname == '/feedBack' ? "liactiv" : "noactivli"}><Link to="/feedBack">{t('feedBack')}</Link></li>
                    <li>
                        <div className='languages'>
                            <div className='chekLanguage' onClick={() => setShowLanguage(!showLanguage)}>
                                <img src={selectedLanguage.img} alt='language' />
                            </div>
                            <div className={showLanguage ? 'language' : "noActivLanguage"} >
                                {
                                    languages.map((e) => {
                                        if (selectedLanguage.id != e.id) {
                                            return (
                                                <img src={e.img} key={e.id} onClick={() => {
                                                    setShowLanguage(false)
                                                    handleChangeLanguage(e.code)
                                                    setSelectedLanguage(e)
                                                }} />
                                            )
                                        } else {
                                            return null;
                                        }
                                    })
                                }
                            </div>
                            <div className='angle'>
                                {
                                    showLanguage ?
                                        <i className="fa fa-angle-up" aria-hidden="true" onClick={() => setShowLanguage(false)}></i>
                                        :
                                        <i className="fa fa-angle-down" aria-hidden="true" onClick={() => setShowLanguage(true)}></i>
                                }
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className={btnMenuBars ? 'openMenuLinks' : 'closeMenuLinks'} id='Links'>
                    <li onClick={() => {
                        window.scrollTo(0, 0)
                        setMenuBars(false)
                    }}><Link to='/'>{t('home')}</Link></li>
                    <li onClick={() => {
                        window.scrollTo(0, 0)
                        setMenuBars(false)
                    }}><Link to='/aboutUS'>{t('aboutUs')}</Link></li>
                    <li onClick={() => {
                        window.scrollTo(0, 0)
                        setMenuBars(false)
                    }}><Link to='/product'>{t('product')}</Link></li>
                    <li onClick={() => {
                        window.scrollTo(0, 0)
                        setMenuBars(false)
                    }}><Link to='/services'>{t('service')}</Link></li>
                    <li onClick={() => {
                        window.scrollTo(0, 0)
                        setMenuBars(false)
                    }}><Link to='/coWorker'>{t('co-workers')}</Link></li>
                    <li onClick={() => {
                        window.scrollTo(0, 0)
                        setMenuBars(false)
                    }}><Link to='/feedBack'>{t('feedBack')}</Link></li>
                    <li>
                        <div className='languages' onClick={() => setShowLanguage(!showLanguage)}>
                            <div className='chekLanguage'>
                                <img src={selectedLanguage.img} alt='language' />
                            </div>
                            <div className={showLanguage ? 'language' : "noActivLanguage"}>
                                {
                                    languages.map((e) => {
                                        if (selectedLanguage.id != e.id) {
                                            return (
                                                <img src={e.img} key={e.id} onClick={() => {
                                                    setShowLanguage(false)
                                                    handleChangeLanguage(e.code)
                                                    setSelectedLanguage(e)
                                                }} />
                                            )
                                        } else {
                                            return null;
                                        }
                                    })
                                }
                            </div>
                            <div className='angle'>
                                {
                                    showLanguage ?
                                        <i className="fa fa-angle-up" aria-hidden="true" onClick={() => setShowLanguage(false)}></i>
                                        :
                                        <i className="fa fa-angle-down" aria-hidden="true" onClick={() => setShowLanguage(true)}></i>
                                }
                            </div>
                        </div>
                    </li>
                    <li className='iconsClose-open'>
                        {
                            btnMenuBars ?
                                <i className="fa fa-chevron-right" aria-hidden="true" onClick={() => setMenuBars(false)}></i>
                                :
                                <i className="fa fa-chevron-left" aria-hidden="true" ></i>
                        }
                    </li>
                </ul>
            </div>
        </header >
    )
}