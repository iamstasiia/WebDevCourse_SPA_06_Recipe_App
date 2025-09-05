import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.component";
import "./Recipe.page.scss";

function RecipePage() {
    const [recipe, setRecipe] = useState([]);

    const path = window.location.pathname.split("/");
    const dishId = path[2];

    useEffect(() => {
        const getRecipe = async () => {
            // const apiKey = import.meta.env.VITE_API_KEY;
            const apiId = import.meta.env.VITE_API_ID;

            // const response = await fetch(
            //     `https://api.spoonacular.com/recipes/${dishId}/information?includeNutrition=false&apiKey=${apiKey}`
            // );
            const response = await fetch(`https://www.themealdb.com/api/json/v1/${apiId}/lookup.php?i=${dishId}&`);
            const data = await response.json();

            setRecipe(data.meals[0]);
        };

        getRecipe();
    }, [dishId]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!recipe) {
        return (
            <div className="recipe-page-container">
                <h2>Loading...</h2>
                <Link to="/recipes" className="go-back-button">
                    Go back
                </Link>
            </div>
        );
    }

    return (
        <div className="recipe-page-container">
            <div className="recipe-img" style={{ backgroundImage: `url(${recipe.strMealThumb})` }}></div>
            <article>
                <p className="meal-type">
                    {recipe.strArea} {recipe.strCategory?.toLowerCase()}
                </p>
                <h1>{recipe.strMeal}</h1>

                <div className="serving-group">
                    {/* <div>
                        <strong>{Math.round(recipe.recipe.calories / recipe.recipe.yield)}</strong>
                        <p>calories/serving</p>
                    </div>
                    <div>
                        <strong>{recipe.recipe.yield}</strong>
                        <p>servings</p>
                    </div>
                    <div>
                        <strong>
                            {Math.round(recipe.recipe.digest[0].total / recipe.recipe.yield)}g (
                            {Math.round(recipe.recipe.digest[0].daily / recipe.recipe.yield)}
                            %)
                        </strong>
                        <p>fat</p>
                    </div> */}
                </div>

                <h3>Ingredients:</h3>
                <ul className="ingredients-group">
                    {Array.from({ length: 20 }, (_, i) => {
                        const ingredient = recipe[`strIngredient${i + 1}`];
                        const measure = recipe[`strMeasure${i + 1}`];
                        return (
                            ingredient &&
                            ingredient.trim() !== "" && (
                                <li key={i}>
                                    {measure} {ingredient}
                                </li>
                            )
                        );
                    })}
                </ul>

                <h3>Instructions:</h3>
                {recipe.strInstructions
                    ?.split(/\r?\n\r?\n+/)
                    .map((p) => p.trim())
                    .map((paragraph, index) => (
                        <p className="instrParagraph" key={index}>
                            {paragraph}
                        </p>
                    ))}

                <Link to="/recipes" className="go-back-button">
                    Go back
                </Link>
            </article>
            <Footer />
        </div>
    );
}

export default RecipePage;
