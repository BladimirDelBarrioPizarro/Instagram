import{
    SET_COMMENT,
    IStateHeader,
    IHeaderAction
} from '../types/header.types'

export const initialState:IStateHeader = {
    data:[]
}

export function HeaderReducer(state = initialState,action:IHeaderAction):IStateHeader{
    switch (action.type) {
        case SET_COMMENT:
          return {
            ...state,  
            data: [...state.data, action.payload]
          }
        default:
            return state;  
    }
}