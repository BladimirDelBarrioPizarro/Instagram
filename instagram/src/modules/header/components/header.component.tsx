import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {HeaderAction} from '../actions/header.actions'
import {IComment} from '../types/header.types'
import logo from '../../../logo.svg'

interface IHeaderProps{
    title?:string
}

const Header = (props:IHeaderProps) => {
    const {title} = props;
    const [text,setText] = useState('')
    const t = text ? text : setText('Edit')
    /* const handleClick = (value:string) => {
       setText(value)
       value === 'Learn' ? setText('test'):setText('test2')
    } */

    const dispatch = useDispatch();
    const headerComment = (data:IComment) => dispatch(HeaderAction(data))
    const data:IComment = {
        text
    }

    return(
        
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            <p>{title}</p>
        <p>
          {t} <code onClick={() => headerComment(data)}>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
   
}

export default Header;