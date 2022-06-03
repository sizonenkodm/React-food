import React from 'react';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const { strMeal, strMealThumb, idMeal } = props;
    return (
        <div className="card">
            <div className="card-image">
                <img id='food-img' src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title"><b><i>{strMeal}</i></b></span>
            </div>
            <div className='card-action'>
                <Link to={`/meal/${idMeal}`} className='btn indigo lighten-3'>Watch recipe</Link>
            </div>
        </div>
    );
};

export default Meal;