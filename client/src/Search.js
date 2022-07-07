import React from "react";
import { useState } from 'react'

function Search({ handleSearchRecipes, searchRecipes }) {
    const [search, setSearch] = useState(false)

    const handleSearchBar = () => {
        setSearch(search => !search)
    }

    return (
        <div>
            {search ?
                <div className="searchbar">
                    <label htmlFor="search">Search By Recipe Name:</label>
                    <input
                        type="text"
                        id="search"
                        placeholder="Type a name to search..."
                        value={searchRecipes}
                        onChange={handleSearchRecipes}
                    />
                </div> :
                <button onClick={handleSearchBar} > Looking for something specific? </button>
            }
        </div>
    )
}

export default Search;