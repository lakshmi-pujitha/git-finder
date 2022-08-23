import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {


    const [feedback, SetFeedback] = useState([
        {
            id:1,
            text:"This item is from context One",
            rating: 5
        },
        {
            id:2,
            text:"This item is from context Two",
            rating: 6
        },
        {
            id:3,
            text:"This item is from context Three",
            rating: 7
        },
    ])

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

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback
    }}>
        {children}
    </FeedbackContext.Provider>

}


export default FeedbackContext;