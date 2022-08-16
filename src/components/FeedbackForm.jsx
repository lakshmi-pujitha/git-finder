import React from 'react';
import { useState } from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({handelAdd}) {

  const [text, setText] = useState('');
  const [rating, setRating] = useState();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');


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

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length > 10){
      const newFeedback = {
        text,
        rating
      }

      handelAdd(newFeedback);
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