import { createContext, useState, useEffect } from "react";

export const QueryContext = createContext();

export const QueryProvider = ({ children }) => {
    const [query, setQuery] = useState("avocado");
    const [recipes, setRecipes] = useState([]);

    console.log(query);

    const changeQuery = (newQuery) => {
        setQuery(newQuery);
    };

    const apiId = import.meta.env.VITE_API_ID;
    const apiKey = import.meta.env.VITE_API_KEY;
  
    useEffect(() => {
        const getRecipes = async () => {
            const response = await fetch(
              `https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}`
            );
            const data = await response.json();
            setRecipes(data.hits);
          };
          getRecipes();
    }, [query]);

    return (
        <QueryContext.Provider value={{ query, changeQuery, recipes }}>
            {children}
        </QueryContext.Provider>
    );
}
