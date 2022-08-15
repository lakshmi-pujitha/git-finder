import React, { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';


function App() {

  const [feedback, SetFeedback] = useState(FeedbackData);

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
      <FeedbackForm/>
      <FeedbackList feedback={feedback} handelDelete = { deleteFeedback }/>
      </div>

     </>
  )
}

export default App;
