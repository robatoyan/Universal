import { useState, useEffect } from 'react';
import { SuccessMessage } from '../../component/SuccessMessage';
// style
import './services.css';
// react hook form
import { useForm } from 'react-hook-form';
// aos
import Aos from 'aos';
import "aos/dist/aos.css";
// translations
import { useTranslation } from 'react-i18next';

export const Services = () => {
    useEffect(() => {
        Aos.init({})
    }, [])

    const [orderbtn, setOrderbtn] = useState(false)

    const [servicesccses, setservicescsses] = useState(false)

    const [orderCall, setOrderCall] = useState([])

    const { register, handleSubmit, reset } = useForm()

    const addOrderCall = (obj) => {
        let call = [...orderCall]
        call.push({ ...obj, id: Date.now() })
        setOrderCall(call)
    }

    const save = (obj) => {
        addOrderCall(obj)
        setservicescsses(true)
        setOrderbtn(false)
        reset()
    }

    const [t, i18n] = useTranslation("global");

    return (
        <div className="servicePage">
            <div className="container sercisedata"
                data-aos="zoom-in"
                data-aos-duration="2000">
                <div className='accessories'>
                    <div>
                        <h2>{t("accessories")}</h2>
                        <p>{t("serviceUsdata1")} </p>
                        <button onClick={() => setOrderbtn(true)} className='btn-Service-page'>{t("ordercall")}</button>
                    </div>
                    <img src="/imgService/imgService.png" alt='Service' />
                </div>
                <div className='custoMorder'>
                    <img src="/imgService/imgService1.png" alt='Service' />
                    <div >
                        <h2>{t("customorder")} </h2>
                        <p>{t("serviceUsdata2")}</p>
                        <button onClick={() => setOrderbtn(true)} className='btn-Service-page'>{t("ordercall")}</button>
                    </div>
                </div>
                <img src='/imgService/halfmoon.png' className='serviceHalfMoon' data-aos="fade-right" data-aos-duration="2000" alt='halfmoon' />
                <img src='/imgService/halfmoon1.png' className='serviceHalfMoon1' data-aos="fade-right" data-aos-duration="2000" alt='halfmoon' />
            </div>
            <div className={orderbtn ? "orderaCallOpen" : "orderCallClose"} id='orderCall'>
                <form onSubmit={handleSubmit(save)}>
                    <div className='orderData'>
                        <h3>{t("ordercall")}</h3>
                        <div className='orderInput'>
                            <input placeholder={t("name")} {...register("name", { required: true })} type='text' />
                            <input placeholder={t("surname")} {...register("surname", { required: true })} type='text' />
                        </div>
                        <input placeholder={t("phonenumber")} className='phone' {...register("poneNumber", { required: true })} type='number' />
                        <textarea placeholder={t("servicename")}{...register("serviceName", { required: true })} />
                        <button className='toorderCall'>{t("toOrder")}</button>
                    </div>
                    <img src='/imgFeedBack/imgTime.png' alt='FeedBack' className='timeOrder' onClick={() => setOrderbtn(false)} />
                </form>
            </div>
            <SuccessMessage show={servicesccses} onClose={() => setservicescsses(false)} />
        </div>
    )
}