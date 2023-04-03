import React, { useContext , useState, useEffect} from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {

  const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext);

  const [text, setText] = useState('');
  const [rating, setRating] = useState();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
   if(feedbackEdit.edit === true){
    setBtnDisabled(false)
    setText(feedbackEdit.item.text)
    setRating(feedbackEdit.item.rating);
   }
  },[feedbackEdit])   //doubt 


  const handleTextChange = (e) => {

    if(text === ''){
        setBtnDisabled(true)
        setMessage(null)
    } else if( text !== '' && text.trim().length <= 10){
        setBtnDisabled(true)
        setMessage("Text must be at least 10 characters")
    } else {
        setBtnDisabled(false)
        setMessage(null)
    }

    setText(e.target.value);
  }

  const handleSubmit = (e) => {  //doubt
    e.preventDefault();
    if(text.trim().length > 10){
      const newFeedback = {
        text,
        rating
      }

      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback);
      }
      setMessage(null)
      setText("");
    }
  }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>What would you say about your experience with us?</h2>
            <RatingSelect select={(rating) => {setRating(rating)}}/>
            <div className='input-group'>
                <input type="text" onChange={handleTextChange} placeholder='Write a Review' value={text}/>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            { message && <div className='message'>{message}</div> }
        </form>
    </Card>
  )
}

export default FeedbackForm