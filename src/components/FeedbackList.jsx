import Feedbackitem from "./Feedbackitem" 
import Spinner from "../shared/Spinner" 
import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';
function FeedbackList() {

    const {feedback, isLoading} = useContext(FeedbackContext);

    if(!isLoading && (!feedback || feedback.length === 0)){
        return (
            <div className='container'>
                <p>No FeedBack Yet</p>
            </div>
        )
    }


    return isLoading ? <Spinner/> : (
        <div className="container">
            <div className="feedback-list">
                {feedback.map((item, index) => (
                    <Feedbackitem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
    
}


export default FeedbackList