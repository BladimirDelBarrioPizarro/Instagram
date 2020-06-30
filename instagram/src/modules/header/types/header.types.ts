export const SET_COMMENT = 'SET_COMMENT'

export interface IComment {
    text:string
}

export interface IStateHeader {
    data:IComment[]
}

export interface IHeaderAction{
    type:typeof SET_COMMENT,
    payload:IComment
}

export type HelloTypes = IHeaderAction