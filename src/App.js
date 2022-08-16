import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';


function App() {

  const [feedback, SetFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    SetFeedback([newFeedback,...feedback]);
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Are you Sure to delete')){
      SetFeedback(feedback.filter((item) => ( 
          item.id !== id 
      )))
    }
  }

  return(
     <>
      <Header/>
      <div className='container'>
      <FeedbackStats feedback = {feedback}/>
      <FeedbackForm handelAdd = {addFeedback}/>
      <FeedbackList feedback={feedback} handelDelete = { deleteFeedback }/>
      </div>

     </>
  )
}

export default App;


