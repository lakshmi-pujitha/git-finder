import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    
    const [isLoading, setIsLoading] = useState(true);

    const [feedback, SetFeedback] = useState([])

    const [feedbackEdit, SetFeedbackEdit] = useState({
        item:{},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    },[])    


    // fetch 

    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`);
        const data = await response.json();

        SetFeedback(data) 
        setIsLoading(false)
    }

    const addFeedback = async (newFeedback) => {
        // newFeedback.id = uuidv4();
        // SetFeedback([newFeedback,...feedback]);
        // console.log(newFeedback);
        const response = await fetch("/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"   
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json();

        SetFeedback([data,...feedback]);

    }

    const deleteFeedback = async (id) => {
        if(window.confirm('Are you Sure to delete')){
          await fetch(`/feedback/${id}`, {method: "DELETE"});
          SetFeedback(feedback.filter((item) => ( 
              item.id !== id 
          )))
        }
    }

    const editFeedback = (item) => {
        SetFeedbackEdit({
            item,
            edit:true
        })
    }

    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updItem)
        }) 

        const data = await response.json();

        SetFeedback(feedback.map((item) => (
            item.id === id ? {...item, ...data} : item
        )))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children} 
    </FeedbackContext.Provider>

}


export default FeedbackContext;