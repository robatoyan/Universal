// style
import './style.css';
// react router dom
import { useLocation } from 'react-router-dom';
// translations
import { useTranslation } from 'react-i18next';

export const SuccessMessage = ({ show, onClose }) => {
    const [t, i18n] = useTranslation("global");
    
    const location = useLocation()

    return (
        <div className={show ? "activemassage" : "noactivemassage"} id='massage'>
            <div className='massageFeedBack'>
                <h3>{t("thankyou")}</h3>
                {
                    location.pathname == "/Services" ?
                        <span>{t("phonepost")}</span>
                        :
                        <span>{t("elpost")}</span>

                }
                <img src='/imgFeedBack/sccssesfool.png' alt='sucsses' className='sccssesfool' />
                <img src='/imgFeedBack/imgTime.png' alt='time' className='time' onClick={onClose} />
            </div>
        </div>
    )
}