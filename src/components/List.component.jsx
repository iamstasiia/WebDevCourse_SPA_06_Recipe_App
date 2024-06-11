import { useContext } from "react";
import { QueryContext } from "../contexts/Query.context";
import RecipeCard from "./RecipeCard.component";

function List() {
    const { query, recipes } = useContext(QueryContext);

    return (
        <>
            <h2>Recipes with {query}:</h2>
            <ul>
                {recipes.map((recipeObj, index) => <RecipeCard key={index} recipeObj={recipeObj} />)}
            </ul>
        </> 
    );
}

export default List;
