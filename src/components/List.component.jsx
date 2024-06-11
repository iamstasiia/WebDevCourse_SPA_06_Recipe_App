import { useContext } from "react";
import { QueryContext } from "../contexts/Query.context";
import { NavLink } from "react-router-dom";

function List() {
    const { recipes } = useContext(QueryContext);

    return (
        <ul>
            <h2>Recipes:</h2>
            {recipes.map((recipe, index) => (<li key={index}><NavLink to={`/${recipe.recipe.label}`} >{recipe.recipe.label}</NavLink></li>))}
        </ul>
    );
}

export default List;
