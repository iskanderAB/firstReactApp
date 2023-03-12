import React from "react";

const SearchBar = () => {
    return (<div style={{
        width: "100%",
        height: "30%",
        border: "3px solid  blue",
        margin: "auto"
    }}>
        <input type="text" placeholder="Search ..."/>
        <div>
            <input id="checkbox" type="checkbox"/>
            <label for="checkbox">only show producs in stock</label>
        </div>
    </div>)
}

export default SearchBar;