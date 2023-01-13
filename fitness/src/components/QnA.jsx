import React,{ useState } from 'react';
import SingleQuestion from './FAQ';
import data from '../Data/questions';
import '../css/accordionStyle.css';

export const QnA=()=>{
    const [questions, setQuestions] = useState(data);
  return (
    <><main>
      <div className='accordion-container'>
        <h3>Some Frequently Asked Questions</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
    <div className='footer'>
        <p><small>&copy; 2021 Pexels GmbH</small></p>
    </div></>
  );
}