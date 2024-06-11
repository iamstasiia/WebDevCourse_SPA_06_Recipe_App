import { useContext, useState } from "react";
import { QueryContext } from "../contexts/Query.context";

function Search() {
    const [search, setSearch] = useState('');
    const onSubmitHandler = (event) => {
        event.preventDefault();
        changeQuery(search);
        setSearch('');
    }

    const { changeQuery } = useContext(QueryContext);

    return (
        <form onSubmit={onSubmitHandler} className="search-form">
            <input
              className="search-bar"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter the product"
            />
            <button className="search-btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    );
}

export default Search;
