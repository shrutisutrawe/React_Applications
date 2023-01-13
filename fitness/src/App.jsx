import React from 'react';
import { useState } from 'react';
import NavBar from './components/Nav';
import './css/style.css';
import { Home } from "./components/Home";
import { Diet } from "./components/Diet";
import { Exercise } from "./components/Exercise";
import { QnA } from "./components/QnA";
import { MealPlan } from "./components/MealPlan";
import Feedback from "./components/Feedback";


function App(){
  // const defaultPage = document.location.hash.replace('#','');
  const[page, setPage] = useState(document.location.hash || '#Home');
  return(
    <div className="app">
      <NavBar page={page} setPage={setPage}/>
      { page === '#Home' && <Home/> }
      { page === '#Diet' && <Diet/> }
      { page === '#Exercise' && <Exercise/> }
      { page === '#MealPlan' && <MealPlan/> }
      { page === '#QnA' && <QnA/> }
      { page === '#Feedback' && <Feedback/> }
    </div>
  );
}
export default App;