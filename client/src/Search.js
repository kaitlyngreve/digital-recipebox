import React from "react";
import { useState } from 'react'

function Search({ handleSearchRecipes, searchRecipes }) {

    return (
        <div>
            <div className="searchbar section-card section-contained">
                <label id='search-label' htmlFor="search">Search By Recipe Name:  </label>
                <input
                    type="text"
                    id="search"
                    placeholder="Type a name to search..."
                    value={searchRecipes}
                    onChange={handleSearchRecipes}
                />
            </div>
        </div>
    )
}

export default Search;