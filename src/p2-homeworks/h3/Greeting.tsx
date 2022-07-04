import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    let buttonSwitch = false;
    let errorClass = s.redError;
    const inputClass = (name.length === 0 ? s.errorClass : s.someClass);
    if (name.length === 0) {
        error = 'empty name';
        buttonSwitch = true;
    } else {
        error = 'good name';
        errorClass = s.blueError;
    }

    return (
        <div className={s.block}>
            <SuperInputText value={name} onChange={setNameCallback} className={inputClass}/>
            <span className={errorClass}>{error}</span>
            <SuperButton disabled={buttonSwitch} onClick={addUser}>add</SuperButton>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
