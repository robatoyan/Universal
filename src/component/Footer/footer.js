// style
import './footer.css';
// react i18next
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <div className="footer">
            <div className='container footerContact'>
                <img src='/footerLogo/logo.png' alt='' className='contactImg' />
                <div className='footerProduct'>
                    <h3 className='footerh3'>{t("product")}</h3>
                    <ul>
                        <li>{t("liqiids")}</li>
                        <li>{t("ointments")}</li>
                        <li>{t("oil")}</li>
                        <li>{t("spirits")}</li>
                        <li>{t("powder")}</li>
                        <li>{t("skinproduct")}</li>
                    </ul>
                </div>
                <div className='footerContactUs'>
                    <h3 className='footerh3'>{t("contactus")}</h3>
                    <ul>
                        <li><img src='/footerLogo/phon.png' alt='phone' />{t("callus")}: <a href='tel:+374 90 000 000'>+374 90 000 000</a></li>
                        <li><img src='/footerLogo/massage.png' alt='massage' /> {t("email")}: <a href='mailto:@mail.ru'>@mail.ru</a></li>
                        <li><img src='/footerLogo/place.png' alt='place' />{t("erevan")}</li>
                    </ul>
                </div>
                <div className='lookForUs'>
                    <h3 className='footerh3'>{t("lookforus")}</h3>
                    <div className='footerimgIcons'>
                        <a href=''><img src='/footerLogo/instagram.png' alt='instagram' className='instagram' /></a>
                        <a href=''><img src='/footerLogo/twiter.png' alt='twiter' className='twiter' /></a>
                        <a href=''><img src='/footerLogo/fasebook.png' alt='fasebook' className='fasebook' /></a>
                    </div>
                </div>
            </div>
            <span>By ArmCoding - © 2022 Բոլոր իրավունքները պաշտպանված են</span>
        </div>
    )
}