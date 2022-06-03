import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = (props) => {
    const { strCategory, strCategoryDescription, strCategoryThumb } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img id='food-img' src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className="card-content">
                <span className="card-title"><b><i>{strCategory}</i></b></span>
                <p className='card-deacription'>{strCategoryDescription}</p>
            </div>
            <div className='card-action'>
                <Link to={`/category/${strCategory}`} className='btn indigo lighten-3'>Watch category</Link>
            </div>
        </div>
    );
};

export default CategoryItem;