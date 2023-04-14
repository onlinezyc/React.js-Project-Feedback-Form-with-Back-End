import {React} from 'react';
import Header from './components/Header.jsx';
import FeedbackList from './components/FeedbackList.jsx';
import FeedbackStats from './components/FeedbackStats.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {FeedbackProvider} from './context/FeedbackContext';

function App(){

  return (
    <FeedbackProvider>
    <>
    <Header />
    <div className='container'>

      <FeedbackForm/>
      <FeedbackStats/>
      <FeedbackList/>



    </div>
    </>
    </FeedbackProvider>


  )
}

export default App;