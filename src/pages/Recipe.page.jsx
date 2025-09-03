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
            const apiKey = import.meta.env.VITE_API_KEY;
            const response = await fetch(
                `https://api.spoonacular.com/recipes/${dishId}/information?includeNutrition=false&apiKey=${apiKey}`
            );
            const data = await response.json();

            setRecipe(data);
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
            <div className="recipe-img" style={{ backgroundImage: `url(${recipe.image})` }}></div>
            <article>
                {/* <p className="meal-type">{recipe.recipe.mealType}</p> */}
                <h1>{recipe.title}</h1>

                <div className="serving-group">
                    <div>
                        {/* <strong>{Math.round(recipe.recipe.calories / recipe.recipe.yield)}</strong> */}
                        <p>calories/serving</p>
                    </div>
                    <div>
                        {/* <strong>{recipe.recipe.yield}</strong> */}
                        <p>servings</p>
                    </div>
                    <div>
                        {/* <strong>
                            {Math.round(recipe.recipe.digest[0].total / recipe.recipe.yield)}g (
                            {Math.round(recipe.recipe.digest[0].daily / recipe.recipe.yield)}
                            %)
                        </strong> */}
                        <p>fat</p>
                    </div>
                </div>

                <h3>Ingredients:</h3>
                <ul className="ingredients-group">
                    {recipe.extendedIngredients.map((item, index) => (
                        <li key={index}>{item.original}</li>
                    ))}
                </ul>

                <h3>Instructions:</h3>
                {recipe.analyzedInstructions.steps.map((item, index) => (
                    <li key={index}>{item.step}</li>
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
