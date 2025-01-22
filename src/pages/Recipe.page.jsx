import { useContext } from "react";
import { QueryContext } from "../contexts/Query.context";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.component";
import "./Recipe.page.scss";

function RecipePage() {
    const { recipes, recipeLabel } = useContext(QueryContext);

    const recipe = recipes.find((recipeObj) => recipeObj.recipe.label === String(recipeLabel));

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
            <div className="recipe-img" style={{ backgroundImage: `url(${recipe.recipe.image})` }}></div>
            <article>
                <p className="meal-type">{recipe.recipe.mealType}</p>
                <h1>{recipe.recipe.label}</h1>

                <div className="serving-group">
                    <div>
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
                    </div>
                </div>

                <ul className="ingredients-group">
                    <h3>Ingredients:</h3>
                    {recipe.recipe.ingredients.map((item, index) => (
                        <li key={index}>{item.text}</li>
                    ))}
                </ul>
                <Link to="/recipes" className="go-back-button">
                    Go back
                </Link>
            </article>
            <Footer />
        </div>
    );
}

export default RecipePage;
