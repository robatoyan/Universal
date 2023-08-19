// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom"
// pages
import { Home } from "../pages/Home"
import { Header } from "./Header/header"
import { About } from "../pages/AboutUs/about"
import { Footer } from "./Footer/footer"
import { Products } from "../pages/Products/product"
import { Services } from "../pages/Services/services"
import { CoWorker } from "../pages/Co-Workers/coWorkers"
import { FeedBackPage } from "../pages/Feedback/feedBack"
import { Product } from "../pages/Product/product"


export const MyRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutUS" element={<About />} />
                <Route path="/product" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path="/coWorker" element={<CoWorker />} />
                <Route path="/feedBack" element={<FeedBackPage />} />
                <Route path="/product/:id" element={<Product />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}