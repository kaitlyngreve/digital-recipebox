import React from "react";

function Search({ handleSearchRecipes, searchRecipes }) {
    return (
        <div className="searchbar">
            <label htmlFor="search">Search By Recipe Name:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                value={searchRecipes}
                onChange={handleSearchRecipes}
            />
        </div>
    )
}

export default Search;