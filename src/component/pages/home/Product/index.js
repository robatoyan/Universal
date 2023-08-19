import { ProductItem } from '../../../ProductItem';
import { useEffect } from 'react';
// mycontext
import { useContext } from 'react';
import { MyContext } from '../../../MyContex';
// stylee
import './style.css';
// aos
import Aos from 'aos';
import "aos/dist/aos.css";
// react router dom
import { Link } from 'react-router-dom';
// translations
import { useTranslation } from 'react-i18next';


export const Product = () => {
    useEffect(() => {
        Aos.init({})
    }, [])
    const { productsHome } = useContext(MyContext)
    const [t, i18n] = useTranslation("global");

    return (
        <section className="ollProducte" >
            <h2 data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">{t('product')}</h2>
            <div className='container products'>
                {
                    productsHome.map((e) => {
                        return (
                            <ProductItem product={e} key={e.id} />
                        )
                    })
                }
            </div>
            <Link to="/product" onClick={() => window.scrollTo(0, 0)} className="btn-link-product" >{t('seeall')}</Link>
        </section>
    )
}