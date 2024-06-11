import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
    width: 250px;
    height: 300px;
    position: relative;
    border: 1px solid black;
    padding: 0.75rem 1.25rem 0.75rem;
    background-color: rgba(0, 0, 0, 0);

    &:after {
        content: "";
        background: url(${props => props.$imgUrl});
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
        color: #EEE;
        position: absolute;
        width: 100%;
        bottom: 1.5rem;
        padding: 0.25rem 0.5rem;
    }
`

function RecipeCard({ recipeObj, index }) {
    console.log(recipeObj);

    return (
        <li key={index}><NavLink to={`/${recipeObj.recipe.label}`} style={{textDecoration: 'none'}}><Card $imgUrl={recipeObj.recipe.image}><p>{recipeObj.recipe.label}</p></Card></NavLink></li> 
    );
}

export default RecipeCard;
