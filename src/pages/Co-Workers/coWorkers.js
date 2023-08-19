import { CoWrkersItem } from '../../component/CoWorkersItem';
// style
import './coWorkes.css';
//mycontext
import { MyContext } from "../../component/MyContex"
import { useContext } from 'react';

export const CoWorker = () => {
    const { coWorks } = useContext(MyContext)

    return (
        <div className='coWorkersPage'>
            <div className='container coworkesAllpage'>
                {
                    coWorks.map((e) => {
                        return (
                            <CoWrkersItem coworks={e} key={e.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}