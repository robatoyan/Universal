import { useEffect } from 'react';
// style
import './style.css';
// aos
import Aos from 'aos';
import "aos/dist/aos.css";
// react router dom
import { Link } from 'react-router-dom';
// translations
import { useTranslation } from 'react-i18next';

export const ProductItem = ({ product }) => {
    useEffect(() => {
        Aos.init({})
    }, [])

    const [t, i18n] = useTranslation("global");

    return (
        <div className='product'
            data-aos="fade-down"
            data-aos-duration="2000">
            <img src={product.img} className="productImge" alt='product' />
            <h3>{t(product.productName)}</h3>
            <div className='productData'>
                <div className='productSm'>
                    <img src='/imgProduct/topBootn.png' alt='length' />
                    <span>{product.sm}{t('sm')}</span>
                    <img src='/imgProduct/leftRight.png' alt='width' />
                    <span>{product.sm}{t('sm')}</span>
                </div>
                <div className='protuctLayers'>
                    <img src='/imgProduct/imgLayers.png' alt='Layers' />
                    <span>{product.layers} {t('layer')}</span>
                </div>
                <div className='protuctCount'>
                    <img src='/imgProduct/imgCount.png' alt='Count' />
                    <span>{product.count} {t('pcs')}</span>
                </div>
            </div>
            {
                product.sterile ?
                    <div className='sterile'>
                        <h4>{t("sterile")}</h4>
                    </div>
                    :
                    <></>
            }
            <Link className='btn-link-product' onClick={() => window.scrollTo(0, 0)} to={"/product/" + product.id}>{t("seemore")}</Link>
        </div>

    )
}