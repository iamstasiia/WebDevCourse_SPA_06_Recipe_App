import { useContext } from "react";
import { QueryContext } from "../contexts/Query.context";
import RecipeCard from "./RecipeCard.component";
import PropTypes from "prop-types";

function List({ forwardHandler }) {
    const { query, recipes } = useContext(QueryContext);

    return (
        <>
            <h2>Recipes with {query}:</h2>
            <ul>
                {recipes.map((recipeObj, index) => (
                    <RecipeCard key={index} recipeObj={recipeObj} forwardHandler={forwardHandler} />
                ))}
            </ul>
        </>
    );
}

List.propTypes = {
    forwardHandler: PropTypes.func,
};

export default List;
