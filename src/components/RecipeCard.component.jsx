import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { QueryContext } from "../contexts/Query.context";
import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
    width: 250px;
    height: 300px;
    position: relative;
    border: 1px solid black;
    padding: 0.75rem 1.25rem 0.75rem;
    background-color: rgba(0, 0, 0, 0);

    &:after {
        content: "";
        background: url(${(props) => props.$imgUrl});
        background-size: cover;
        width: 100%;
        z-index: -1;
        position: absolute;
        height: 100%;
        top: -10px;
        left: 10px;
        transition: 0.2s;
    }

    &:hover:after {
        top: 0px;
        left: 0px;
    }

    p {
        background: black;
        color: #eee;
        position: absolute;
        width: 100%;
        bottom: 1.5rem;
        padding: 0.25rem 0.5rem;
    }
`;

function RecipeCard({ recipeObj, index, forwardHandler }) {
    const { changeRecipeLabel } = useContext(QueryContext);

    return (
        <li key={index}>
            <NavLink
                // to={`/recipes/${recipeObj.recipe.label}`}
                style={{ textDecoration: "none" }}
                onClick={() => {
                    // changeRecipeLabel(recipeObj.recipe.label);
                    changeRecipeLabel(recipeObj.title);
                    forwardHandler();
                }}
            >
                {/* <Card $imgUrl={recipeObj.recipe.image}> */}
                <Card $imgUrl={recipeObj.image}>
                    {/* <p>{recipeObj.recipe.label}</p> */}
                    <p>{recipeObj.title}</p>
                </Card>
            </NavLink>
        </li>
    );
}

RecipeCard.propTypes = {
    recipeObj: PropTypes.object,
    index: PropTypes.number,
    forwardHandler: PropTypes.func,
};

export default RecipeCard;
