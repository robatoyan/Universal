import { CoWrkersItem } from "../../../CoWorkersItem"
// style
import './style.css';
// mycontext
import { MyContext } from "../../../MyContex"
import { useContext } from "react"
// react router dom
import { Link } from "react-router-dom";
// translations
import { useTranslation } from "react-i18next";

export const CoWorkers = () => {
    const [t, i18n] = useTranslation("global");
    const { coWorks,  } = useContext(MyContext)

    return (
        <section className="coWorkers">
            <h2>{t("co-workers")}</h2>
            <div className="container coWorkersall">
                {
                    coWorks.map((e) => {
                        return (
                            <CoWrkersItem coworks={e} key={e.id} />
                        )
                    })
                }
            </div>
            <Link to="/coWorker" onClick={() => window.scrollTo(0, 0)} className="bnn-link-coworks">{t("seeall")}</Link>
        </section>
    )
}