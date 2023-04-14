import {createContext, useState}from 'react';
import {v4 as uuidv4} from 'uuid';

const FeedbackContext=createContext();

export const FeedbackProvider=({children})=>{
  const [feedback, setFeedback]=useState([
    {
      id:1,
      text:"This is one 1111",
      rating:10
    },
    {
      id:2,
      text:"This is feedback 222",
      rating:9
    },
    {
      id:3,
      text:"This item is feedback 333",
      rating:7
    }
  ])

  const [feedbackEdit, setFeedbackEdit]=useState(
    {
      item:{},
      edit:false
    }
  )

  const editFeedback=(item)=>{
    setFeedbackEdit({
      item,
      edit:true
    })
  }

  const deleteFeedback=(id)=>{

    if(window.confirm('Are you sure you want to delte this comment?'))
    {
      setFeedback(feedback.filter((item)=>item.id!==id))
    }
  }

  const updateFeedback=(id, updItem)=>{
    setFeedback(
      feedback.map((item)=>item.id===id?{...item, ...updItem}:item))
  }

  const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4();
    setFeedback([newFeedback, ...feedback])
}

  return <FeedbackContext.Provider value={
    {feedback,feedbackEdit, deleteFeedback, addFeedback,editFeedback,updateFeedback}
  }>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext;