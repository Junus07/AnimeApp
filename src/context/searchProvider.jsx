import React, { useState } from "react";
import { SearchContext } from "./searchContext";

const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    return (

        <SearchContext.Provider value={{ search, setSearch, category, setCategory }}>
            {children}
        </SearchContext.Provider>

    )
}

export default SearchProvider;