import { FeedBackItem } from '../../component/FeedBackItem';
import { SuccessMessage } from '../../component/SuccessMessage';
// style
import './feedBack.css';

export const FeedBackPage = () => {
    return (
        <div className='FeedBackPage'>
            <FeedBackItem />
            <SuccessMessage />
        </div>
    )
}