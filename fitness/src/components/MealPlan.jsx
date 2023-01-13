import React, { useState, useEffect } from 'react'
import mealsData from '../Data/mealsData'
import '../css/mealStyles.css';
export const MealPlan=()=> {
  const [loading, setLoading] = useState(true)
  const [mealsVar, setMeals] = useState([])
  const [value, setValue] = useState(0)

  const fetchMeals = async () => {
    const newMeals = mealsData
    setMeals(newMeals)
    setLoading(false)
  }
  useEffect(() => {
    setTimeout(() => {
      fetchMeals()
    },1000);
    
  }, []);
  if (loading) {
    return (
      <span className="section-loading" role="status">
        <span>&#129367;</span>
        <span className='spinner'></span>
      </span>
      
    )
  }

  

  const { time, calories, meals, title } = mealsVar[value]
  return (
    <><section className="meal-section">
      <div className="meal-title">
        <h2>Single Day Meal Plan</h2>
      </div>
      <div className="meals-center">
        <div className="btn-container">
          {mealsVar.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`meal-btn ${index === value && 'active-btn'}`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
        <article className="meal-info">
          <h3>{title}</h3>
          <h4>{time}</h4>
          <p className="meal-date">{calories}</p>
          {meals.map((meal, index) => {
            return (
              <div key={index} className="meal-desc">
                <span className='meal-icon'>&#187;</span>
                <p>{meal}</p>
              </div>
            );
          })}
        </article>
      </div>

    </section>
    <div className='footer'>
        <p><small>&copy; 2021 Pexels GmbH</small></p>
    </div></>
  )
}
