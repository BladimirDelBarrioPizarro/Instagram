import{
    SET_COMMENT,
    IComment,
    IHeaderAction,
} from '../types/header.types'

export const HeaderAction = (text:IComment) :IHeaderAction =>{
    return{
        type:SET_COMMENT,
        payload:text
    }

}