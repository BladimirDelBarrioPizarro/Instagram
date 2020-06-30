import {combineReducers} from 'redux';
import {IStateHeader} from '../../src/modules/header/types/header.types'
import {HeaderReducer} from '../modules/header/reducer/header.reducer'


interface IApplicationState{
    header:IStateHeader
}

export default combineReducers<IApplicationState>({
    header:HeaderReducer
}) 