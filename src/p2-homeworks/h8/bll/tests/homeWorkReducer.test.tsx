import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})
    const sortedState= [
        {_id: 1, name: 'Александр', age: 66},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 0, name: 'Кот', age: 3}
    ]
    console.log(newState)
    expect(newState[0].name===sortedState[0].name).toBe(true)
    expect(newState[5].name===sortedState[5].name).toBe(true)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})
    const sortedState= [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 5, name: 'Ирина', age: 55},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 1, name: 'Александр', age: 66}
    ];

    console.log(newState)
    expect(newState[0].name===sortedState[0].name).toBe(true)
    expect(newState[5].name===sortedState[5].name).toBe(true)

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})
    const sortedState= [
        {_id: 1, name: 'Александр', age: 66},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55}
    ];

    console.log(newState)
    expect(newState[0].name===sortedState[0].name).toBe(true)
    expect(newState[3].name===sortedState[3].name).toBe(true)

})
