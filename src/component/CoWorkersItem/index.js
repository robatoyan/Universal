import { useEffect } from 'react';
// style
import './style.css';
// aos
import Aos from 'aos';
import "aos/dist/aos.css";

export const CoWrkersItem = ({ coworks }) => {
    useEffect(() => {
        Aos.init({})
    }, [])
    
    return (
        <div className="coWrkersItem"
            data-aos="flip-left"
            data-aos-duration="2000">
            <img src={coworks.img} alt='coworks'/>
        </div>
    )
}