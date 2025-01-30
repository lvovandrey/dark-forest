import { createRef, Component } from 'react';
import css from './TextAreaEditor.module.css';

const TextAreaEditor = (props) => {
    
    let newParameterEditor =  createRef()
    
    const setParameter = () => 
    {
        let newValue = newParameterEditor.current.value
        props.setValue(props.parameter, newValue)
    }
    return (
        <div>
            <div className={css.title}>{props.title}</div>
            <textarea ref={newParameterEditor}  type='text'  onChange={setParameter} value={props.value} />
        </div>
    )
}

export default TextAreaEditor;