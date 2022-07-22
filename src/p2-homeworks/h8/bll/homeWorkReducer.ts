import {UserActionType, UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: UserActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
          let newState=[...state]
            return action.payload === 'up'
                ? newState.sort((a,b)=>a.name.toLowerCase()>b.name.toLowerCase()?1:-1)
                : newState.sort((a,b)=>a.name.toLowerCase()<b.name.toLowerCase()?1:-1)
        }
        case 'check': {
            return state.filter(u=> u.age>=action.payload)
        }
        default: return state
    }
}