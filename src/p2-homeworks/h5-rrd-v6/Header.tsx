import React, {ChangeEvent, useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import classes from './HW5.module.css';

function Header() {
    let [visib, setVisib] = useState<boolean>(false);

    let CheckCheckboxHandler = (c: ChangeEvent<HTMLInputElement>) => {
        c.target.checked ? setVisib(true) : setVisib(false)
    }

    return (
        <div className={classes.navBar}>
            <input  id ="menu__toggle" type="checkbox" onChange={CheckCheckboxHandler} className={classes.checkbox}/>
            <label className={classes.navButton} htmlFor="menu__toggle">
                <span>menu</span>
            </label>
            <div className={visib ? classes.navlinks : classes.navlinks_hid}>
                <NavLink to={PATH.PRE_JUNIOR}
                         className={({isActive}) => isActive ? classes.link_active : classes.link_inactive}>pre-junior</NavLink>
                <NavLink to={PATH.JUNIOR}
                         className={({isActive}) => isActive ? classes.link_active : classes.link_inactive}>junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}
                         className={({isActive}) => isActive ? classes.link_active : classes.link_inactive}> junior
                    + </NavLink>

            </div>
        </div>
    )
}

export default Header
