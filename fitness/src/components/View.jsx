import React from 'react'

export const View = ({feedbacks}) => {
    
    return feedbacks.map(feedback=>(
        <div className='feedback-contents'>
            <h3>{feedback.name}</h3>
            <p>{feedback.comments}</p>
        </div>
    
))
}