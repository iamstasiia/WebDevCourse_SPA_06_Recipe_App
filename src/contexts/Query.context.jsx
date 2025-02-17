import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const QueryContext = createContext();

export const QueryProvider = ({ children }) => {
    const [query, setQuery] = useState(() => {
        return localStorage.getItem("query") || "fish";
    });
    const [recipes, setRecipes] = useState([]);
    const [recipeLabel, setRecipeLabel] = useState(() => {
        return localStorage.getItem("recipeLabel") || null;
    });

    const changeQuery = (newQuery) => {
        setQuery(newQuery);
        localStorage.setItem("query", newQuery);
    };

    const changeRecipeLabel = (newRecipeLabel) => {
        setRecipeLabel(newRecipeLabel);
        localStorage.setItem("recipeLabel", newRecipeLabel);
    };

    useEffect(() => {
        const apiId = import.meta.env.VITE_API_ID;
        const apiKey = import.meta.env.VITE_API_KEY;

        const getRecipes = async () => {
            const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}`);
            const data = await response.json();
            setRecipes(data.hits);
        };

        getRecipes();
    }, [query]);

    return (
        <QueryContext.Provider value={{ query, changeQuery, recipes, recipeLabel, changeRecipeLabel }}>
            {children}
        </QueryContext.Provider>
    );
};

QueryProvider.propTypes = {
    children: PropTypes.object,
};
