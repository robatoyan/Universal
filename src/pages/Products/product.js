import { useState } from 'react';
import { ProductItem } from '../../component/ProductItem';
// style
import './products.css';
// mycontext
import { useContext } from 'react';
import { MyContext } from '../../component/MyContex';
// translations
import { useTranslation } from 'react-i18next';

export const Products = () => {
    const { productsHome } = useContext(MyContext)

    const [cloneProducts, setCloneProducts] = useState([...productsHome])

    const [category, setCategory] = useState("Բինտեր")

    const [categoryBtnId, setcategoryBtnId] = useState(1)

    const [t, i18n] = useTranslation("global");

    return (
        <div className='productsOur'>
            <ul>
                <li onClick={() => {
                    setcategoryBtnId(1)
                    setCategory("Բինտեր")
                }} className={category ? { category: "Բինտեր" } : { category: "" }}
                    style={categoryBtnId == 1 ? { color: '#12724F' } : { color: "" }}>{t("binter")}</li>
                <li onClick={() => {
                    setcategoryBtnId(2)
                    setCategory("թանզիֆՆԵՐ")
                }} className={category ? { category: "թանզիֆՆԵՐ" } : { category: "" }}
                    style={categoryBtnId == 2 ? { color: '#12724F' } : { color: "" }}>{t("tanziffs")}</li>
                <li onClick={() => {
                    setcategoryBtnId(3)
                    setCategory("անձեռոցիկներ")
                }} className={category ? { category: "անձեռոցիկներ" } : { category: "" }}
                    style={categoryBtnId == 3 ? { color: '#12724F' } : { color: "" }}>{t("napkins")}</li>
                <li onClick={() => {
                    setcategoryBtnId(4)
                    setCategory("ԹՈՓԵՐ")
                }} className={category ? { category: "ԹՈՓԵՐ" } : { category: "" }}
                    style={categoryBtnId == 4 ? { color: '#12724F' } : { color: "" }}>{t("tops")}</li>
            </ul>
            <div className='container productsFilter'>
                {
                    cloneProducts.filter((a) => a.category == category).map((e) => {
                        return (
                            <ProductItem product={e} key={e.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}