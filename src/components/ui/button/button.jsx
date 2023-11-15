import React from "react";
import "./style.css";

function Btn({ children, minWidth }) {
    return (
        <button type="button" className="btn" style={{minWidth: minWidth}}>
            {children}
        </button>
    )
}

export default Btn;
