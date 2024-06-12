import { useContext } from "react";
import { QueryContext } from "../contexts/Query.context";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.component";
import "./Recipe.page.scss";

function RecipePage() {
    const { recipes } = useContext(QueryContext);
    const { recipeLabel } = useParams();

    const recipe = recipes.find(
        (recipeObj) => recipeObj.recipe.label === String(recipeLabel),
    );
    console.log(recipe);

    return (
        <>
            <div
                className="recipe-page-container"
                style={{ backgroundImage: `url(${recipe.recipe.image})` }}
            >
                <article>
                    <div>
                        <h1>{recipe.recipe.label}</h1>
                        <small>{recipe.recipe.mealType}</small>
                        <div>
                            <div>
                                <strong>
                                    {Math.round(
                                        recipe.recipe.calories /
                                            recipe.recipe.yield,
                                    )}
                                </strong>
                                <p>calories/serving</p>
                            </div>
                            <div>
                                <strong>{recipe.recipe.yield}</strong>
                                <p>servings</p>
                            </div>
                            <div>
                                <strong>
                                    {Math.round(
                                        recipe.recipe.digest[0].total /
                                            recipe.recipe.yield,
                                    )}
                                    g (
                                    {Math.round(
                                        recipe.recipe.digest[0].daily /
                                            recipe.recipe.yield,
                                    )}
                                    %)
                                </strong>
                                <p>fat</p>
                            </div>
                        </div>

                        <ul>
                            <h3>Ingredients:</h3>
                            {recipe.recipe.ingredients.map((item, index) => (
                                <li key={index}>{item.text}</li>
                            ))}
                        </ul>

                        <Link to="/recipes" className="go-back-button">
                            Go back
                        </Link>
                    </div>
                <Footer />
                </article>
            </div>
        </>
    );
}

export default RecipePage;
