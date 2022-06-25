import React from 'react'
import {AffairType} from "./HW2";
import affairs from "./Affairs";

export type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback:(value: number)=>void
}

function Affair (props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}
    const myStyle ={
        padding: "8px",
        width:"150px",
        display: "flex",
        justifyContent: "space-between"
    }
    return (
        <div style={myStyle}>
             <span>{props.affair.name}  </span>
            <button onClick={ () => {deleteCallback()} }>X</button>
        </div>
    )
}

export default Affair;
