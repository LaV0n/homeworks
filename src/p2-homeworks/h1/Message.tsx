import React from 'react'
import classes from './Message.module.css'
type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props:MessageDataType) {
    return (
        <div className ={classes.message}>
            <img src ={props.avatar} alt="0"/>
            <div className={classes.block}>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.text}>{props.message}</p>
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
