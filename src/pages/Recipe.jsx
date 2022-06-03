import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api';
import Preloader from '../components/Preloader';

const Recipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getMealById(id)
            .then(data => setRecipe(data.meals[0]));
    }, [id])
    return (
        <>
            {
                !recipe.idMeal ? <Preloader /> : (
                    <div className='recipe'>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                        <h1>{recipe.strMeal}</h1>
                        <h6><i>Category: {recipe.strCategory}</i></h6>
                        {recipe.strArea ? <h6><i>Area: {recipe.strArea}</i></h6> : null}
                        <p><b><i>Recipe:</i></b> <br />{recipe.strInstructions}</p>
                        <table className='centered'>
                            <thead>
                                <tr>
                                    <th>Ingredient</th>
                                    <th>Measure</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(recipe).map(key => {
                                        if (key.includes('Ingredient') && recipe[key]) {
                                            return (
                                                <tr key={key}>
                                                    <td>{recipe[key]}</td>
                                                    <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                                </tr>
                                            )
                                        } else {
                                            return null;
                                        }
                                    })
                                }
                            </tbody>
                        </table>
                        {recipe.strYoutube ? (
                            <div className='row'>
                                <h5 style={{ margin: '2rem 0 1.5rem' }}><i>Video Recipe:</i></h5>
                                <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen />
                            </div>
                        ) : null}
                    </div>
                )
            }
            <button className='btn indigo lighten-3' onClick={() => navigate(-1)}>Go Back</button>
        </>
    );
};

export default Recipe;