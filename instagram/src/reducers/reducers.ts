import {combineReducers} from 'redux';
import {IStateHeader} from '../../src/modules/header/types/header.types'
import {HeaderReducer} from '../modules/header/reducer/header.reducer'
import { reducer as formReducer,FormStateMap } from 'redux-form'

interface IApplicationState{
    header:IStateHeader,
    form: FormStateMap
}

export default combineReducers<IApplicationState>({
    header:HeaderReducer,
    form:formReducer
})