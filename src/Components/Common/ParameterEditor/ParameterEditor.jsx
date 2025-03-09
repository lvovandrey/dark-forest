import css from './ParameterEditor.module.css';
import { createRef } from 'react';

const ParameterEditor = (props) => {
    
    let newParameterEditor =  createRef()
    
    const setParameter = () => 
    {
        let newValue = newParameterEditor.current.value
        props.setValue(props.parameter, newValue)
    }
    return (
        <div>
            <div className={css.title}>{props.title}</div>
            <input ref={newParameterEditor} type="text" name={props.parameter} onChange={setParameter} value={props.value}/>
        </div>
    )
}

export default ParameterEditor;