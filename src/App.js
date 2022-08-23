import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLinks from './components/AboutIconLinks';
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {

  const [feedback, SetFeedback] = useState(FeedbackData);

  return(
     <>
     <FeedbackProvider>
      <Router>
        <Header/>
          <div className='container'>
          
            <Routes>
                <Route exact path='/' element={
                  <>
                    <FeedbackStats/>
                    <FeedbackForm/>
                    <FeedbackList/>
                  </>
                }>
                </Route>
              <Route path='/about' element={<AboutPage/>}/>
            </Routes>
          
          <AboutIconLinks></AboutIconLinks>
          
          </div>
        </Router>
      </FeedbackProvider>
     </>
  )
}

export default App;


