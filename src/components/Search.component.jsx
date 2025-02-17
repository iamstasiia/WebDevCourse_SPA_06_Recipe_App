import { useContext, useState } from "react";
import { QueryContext } from "../contexts/Query.context";

function Search() {
    const [search, setSearch] = useState("");
    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (search.length !== 0) {
            changeQuery(search);
            setSearch("");
        }
    };

    const { changeQuery } = useContext(QueryContext);

    return (
        <form onSubmit={onSubmitHandler} className="search-form">
            <input
                className="search-bar"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter the product"
                name="search-bar"
            />
            <button className="search-btn" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    );
}

export default Search;
