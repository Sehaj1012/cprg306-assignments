'use client'
import React, { useState, useEffect } from 'react';

// Function to fetch meal ideas from TheMealDB API
const fetchMealIdeas = async (ingredient) => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.meals; // Assuming the API returns an array of meals
};

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);

    // Function to load meal ideas
    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas || []); // Set to empty array if null is returned
    };

    // useEffect to call loadMealIdeas when the ingredient changes
    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    // Render the component
    return (
        <div>
            <h2><b>Meal Ideas for {ingredient}</b></h2>
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} style={{width: '100px', height: '100px'}} />
                        <p>{meal.strMeal}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealIdeas;