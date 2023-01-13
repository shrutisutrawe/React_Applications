import React, { useState } from 'react';
const FAQ = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='accordion-btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <span className="btn-icon">&#8722;</span> : <span>&#43;</span>}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
    
  );
};
export default FAQ;