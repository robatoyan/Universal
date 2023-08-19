import { useState } from 'react';
// styl
import './App.css';
// mycontext
import { MyContext } from './component/MyContex';
import { MyRouter } from './component/MyRouter';
// translations
import i18next from 'i18next';
import global_am from "./translations/am/global.json";
import global_en from "./translations/en/global.json";
// react i18next
import { I18nextProvider, useTranslation } from 'react-i18next'
i18next.init({
  interpolation: { escapeValue: false },
  lng: 'am',
  resources: {
    am: {
      global: global_am
    },
    en: {
      global: global_en
    }
  }
});

function App() {
  const [t, i18n] = useTranslation("global");

  const [productsHome, setProductsHome] = useState([
    { id: 1, img: "/imgProduct/imgProduct.png", productName: "productNamenapkin", category: "Բինտեր", sterile: true, sm: 7.5, layers: 12, count: 10 },
    { id: 2, img: "/imgProduct/imgProduct.png", productName: "productNamenapkin", category: "Բինտեր", sterile: false, sm: 7.5, layers: 8, count: 10 },
    { id: 3, img: "/imgProduct/imgProductTanzivner.png", productName: "productNametanotnzif", category: "թանզիֆՆԵՐ", sterile: true, sm: 5, layers: 12, count: 100 },
    { id: 4, img: "/imgProduct/imgProduct.png", productName: "productNametops", category: "ԹՈՓԵՐ", sterile: false, sm: 5, layers: 8, count: 100 },
    { id: 5, img: "/imgProduct/imgProduct.png", productName: "productNameNapiknotstrelie", category: "անձեռոցիկներ", sterile: true, sm: 7.5, layers: 12, count: 10 },
    { id: 6, img: "/imgProduct/imgProduct.png", productName: "productNameNapiknotstrelie", category: "անձեռոցիկներ", sterile: false, sm: 7.5, layers: 8, count: 10 }
  ])

  const [coWorks, setCoWorks] = useState([
    { id: 1, img: "/imgCoWorks/imgCoWorks.png" },
    { id: 2, img: "/imgCoWorks/imgCoWorks.png" },
    { id: 3, img: "/imgCoWorks/imgCoWorks.png" },
    { id: 4, img: "/imgCoWorks/imgCoWorks.png" },
    { id: 5, img: "/imgCoWorks/imgCoWorks.png" },
    { id: 6, img: "/imgCoWorks/imgCoWorks.png" }
  ])

  return (
    <div className="App">
      <I18nextProvider i18n={i18next}>
        <MyContext.Provider value={{ productsHome, setProductsHome, coWorks, setCoWorks }}>
          <MyRouter />
        </MyContext.Provider>
      </I18nextProvider>
    </div>
  );
}
export default App;
