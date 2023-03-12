import React from "react";

const ProductRow = () => {
    return <div style={{
        width:"100%",
        height: "20px",
        border: "2px solid red",
        display: "flex",
        justifyContent: "space-around"
        }}> 
        <span>
            footbale
        </span> 
        <span>
            40£
        </span> 
        </div>
}

export default ProductRow;