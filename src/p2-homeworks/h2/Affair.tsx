import React from 'react'
import {AffairType} from "./HW2";
import affairs from "./Affairs";
import './Affairs.module.css';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback:(value: number)=>void
}

function Affair (props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}
    const myStyle ={
        padding: "8px",
        width:"250px",
        display: "flex",
        justifyContent: "space-between"
    }
    return (
        <div style={myStyle}>
             <span>{props.affair.name}</span> <span>{props.affair.priority}</span>
            <SuperButton onClick={ () => {deleteCallback()} }>X</SuperButton>
        </div>
    )
}

export default Affair;
