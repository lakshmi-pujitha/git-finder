import PropTypes from 'prop-types';
import Feedbackitem from "./Feedbackitem"
function FeedbackList({ feedback , handelDelete}) {

    if(!feedback || feedback.length === 0){
        return (
            <div className='container'>
                <p>No FeedBack Yet</p>
            </div>
        )
    }
    
    return (
        <div className="container">
            <div className="feedback-list">
                {feedback.map((item, index) => (
                    <Feedbackitem key={item.id} item={item} handelDelete = {handelDelete}/>
                ))}
            </div>
        </div>
    )
}


FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            text:PropTypes.string.isRequired,
            rating:PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList