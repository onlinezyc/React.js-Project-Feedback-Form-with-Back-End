import FeedbackContext from '../context/FeedbackContext';
import {useContext}from'react';


function FeedbackStats(){
  const {feedback} = useContext(FeedbackContext)
  let average=Math.floor(feedback.reduce((acc,item)=>{
    return acc+item.rating;
  },0)/feedback.length)

  return <div className='feedback-stats'>
    <h4>{feedback.length} Reviews</h4>
    <h4>Average Rating: {isNaN(average)?0:average}</h4>
  </div>
};

export default FeedbackStats;