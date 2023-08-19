import { useState, useEffect } from 'react';
import { SuccessMessage } from '../SuccessMessage';
// style
import './style.css';
// react hook form
import { useForm } from 'react-hook-form';
// aos
import Aos from 'aos';
import "aos/dist/aos.css";
// translations
import { useTranslation } from 'react-i18next';

export const FeedBackItem = () => {
    useEffect(() => {
        Aos.init({})
    }, [])

    const [t, i18n] = useTranslation("global");

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const [massage, setMassage] = useState([])

    const addMassage = () => {
        let s = [...massage]
        s.push({ ...massage, id: Date.now() })
        setMassage(s)
    }

    const save = (obj) => {
        addMassage(obj)
        reset()
        setFeedBack(true)
    }

    const [feedBack, setFeedBack] = useState(false)

    return (
        <div className='FeedBackItem'>
            <div className="container feedBackWithUs">
                <div className="feedBackData"
                    data-aos="zoom-in"
                    data-aos-duration="2000">
                    <p>{t("feedBackText")}</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97531.48691527452!2d44.498943999999995!3d40.189952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1692254970478!5m2!1sru!2sam" className='map'></iframe>
                </div>
                <form className="feedBaclRegister" onSubmit={handleSubmit(save)}
                    data-aos="zoom-in"
                    data-aos-duration="2000">
                    <h2>{t("feedBackUs")}</h2>
                    <input placeholder={t("name")} {...register("name", { required: true })} type='text' />
                    {errors.name && (<p>{t("massageName")}</p>)}
                    <input placeholder={t("email")} {...register("email", { required: true })} type='email' />
                    {errors.email && (<p>{t("massageEmail")}</p>)}
                    <textarea placeholder={t("message")} {...register("desc", { required: true })} />
                    {errors.desc && (<p>{t("massageDesc")}</p>)}
                    <button className='btn-feddBack'>{t("send")}</button>
                </form>
                <SuccessMessage onClose={() => setFeedBack(false)} show={feedBack} />
                <img src='/imgFeedBack/halfmoon.png' className='feedBachalfmoon' data-aos="fade-right" data-aos-duration="2000" />
            </div>
        </div>
    )
}