import css from './ParameterEditor.module.css';
import { createRef, Component } from 'react';

const ParameterEditor = (props) => {
    
    let newParameterEditor =  createRef()
    
    const setParameter = (newValue) => 
    {
        let val = newParameterEditor.current.value
        props.setValue(val)
    }

    return (
        <div>
            <div className={css.title}>{props.title}</div>
            <input ref={newParameterEditor} type="text" name={props.parameter} onChange={setParameter} defaultValue={props.value}/>
        </div>
    )
}

export default ParameterEditor;