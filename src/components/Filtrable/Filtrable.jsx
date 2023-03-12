import React from "react"; 
import ProductTable from "../ProductTable/ProductTable";
import SearchBar from "../searchBar/SearchBar";
import './Filtrable.css';

function Filtrable () {
    return (
        <div className="filtrable"> 
            <SearchBar/>
            <ProductTable/>
        </div>
    );
}

export default Filtrable;