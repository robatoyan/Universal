import { useEffect, useState } from 'react';
// style
import './product.css';
// mycontext
import { MyContext } from '../../component/MyContex';
import { useContext } from 'react';
// react router dom
import { useParams } from 'react-router-dom';
// aos
import Aos from 'aos';
import "aos/dist/aos.css";
// translations
import { useTranslation } from 'react-i18next';

export const Product = () => {
    useEffect(() => {
        Aos.init({})
        setProduct(productsHome.find((e) => e.id == params.id))
    }, [])

    const { productsHome } = useContext(MyContext)

    const [product, setProduct] = useState({})

    const params = useParams()

    const [t, i18n] = useTranslation("global");

    return (
        <div className='productpage'>
            <ul>
                <li style={product.category == "Բինտեր" ? { color: "#12724F" } : {}}>{t("binter")}</li>
                <li style={product.category == "թանզիֆՆԵՐ" ? { color: "#12724F" } : {}}>{t("tanziffs")}</li>
                <li style={product.category == "անձեռոցիկներ" ? { color: "#12724F" } : {}}>{t("napkins")}</li>
                <li style={product.category == "ԹՈՓԵՐ" ? { color: "#12724F" } : {}}>{t("tops")}</li>
            </ul>
            <div className='container productpageData'>
                <div className='productpageimg'
                    data-aos="zoom-in"
                    data-aos-duration="2000">
                    <img src={product.img} />
                    {
                        product.sterile ?
                            <div className='sterileproduct'>
                                <h4>{t("sterile")}</h4>
                            </div>
                            :
                            <></>
                    }
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-duration="2000">
                    <h3>{t("medicalsterial")}</h3>
                    <div className='sm-m'>
                        <div className='ntGreen'>
                            <img src='/imgProduct/topBootn.png' alt='length' />
                            <span>16{t("sm")}</span>
                            <img src='/imgProduct/leftRight.png' alt='width' />
                            <span>10{t("m")}</span>
                        </div>
                        <div>
                            <img src='/imgProduct/topBootnblack.png' alt='length' />
                            <span>14{t("sm")}</span>
                            <img src='/imgProduct/leftRightblack.png' alt='width' />
                            <span>7{t("m")}</span>
                        </div>
                        <div>
                            <img src='/imgProduct/topBootnblack.png' alt='length' />
                            <span>10{t("sm")}</span>
                            <img src='/imgProduct/leftRightblack.png' alt='width' />
                            <span>5{t("m")}</span>
                        </div>
                    </div>
                    <p>{t("productData")}</p>
                </div>
            </div>
        </div>
    )
}
