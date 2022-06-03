import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import Preloader from '../components/Preloader';
import MealList from '../components/MealList';
import Search from '../components/Search';

const Category = () => {
    const [meals, setMeals] = useState([]);
    const [filteredMeals, setFilteredMeals] = useState([]);

    const { name } = useParams();
    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    const handleSearch = (str) => {
        setFilteredMeals(
            meals.filter(el => el.strMeal.toLowerCase().includes(str.toLowerCase()))
        );
        navigate({
            pathname,
            search: `?search=${str}`
        })
    }

    useEffect(() => {
        getFilteredCategory(name)
            .then(data => setMeals(data.meals));


        getFilteredCategory(name)
            .then(data => {
                setMeals(data.meals);
                setFilteredMeals(search ?
                    data.meals.filter(el =>
                        el.strMeal
                            .toLowerCase()
                            .includes(search.split('=')[1].toLowerCase())
                    ) : data.meals
                );
            });
    }, [name, search]);

    return (
        <>
            <button className='btn indigo lighten-3' onClick={() => navigate(-1)}>Go Back</button>
            <Search cb={handleSearch} />
            {
                !meals.length ? <Preloader /> : <MealList meals={filteredMeals} />
            }
        </>
    );
};

export default Category;