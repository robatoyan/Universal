import { AboutUs } from "../../component/pages/home/AboutUs"
import { Product } from "../../component/pages/home/Product"
import { Service } from "../../component/pages/home/Service"
import { CoWorkers } from "../../component/pages/home/CoWorkers"
import { FeedBack } from "../../component/pages/home/FeedBack"
// style
import './style.css';

export const Home = () => {
    return (
        <div className="Universal">
            <AboutUs />
            <Product />
            <Service />
            <CoWorkers />
            <FeedBack />
        </div>
    )
}