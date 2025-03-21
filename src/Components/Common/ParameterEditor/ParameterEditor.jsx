import css from './ParameterEditor.module.css';
import { createRef } from 'react';

const ParameterEditor = (props) => {
    
    let newParameterEditor =  createRef()
    
    const setParameter = () => 
    {
        let newValue = newParameterEditor.current.value
        props.setValue(props.parameter, newValue)
    }
    if(!!props.setValue){
        return (
            <div>
                <div className={css.title}>{props.title}</div>
                <input ref={newParameterEditor} type="text" name={props.parameter} onChange={setParameter} value={props.value}/>
            </div>
        )
    }

    let {input, meta, ...newprops} = props
    const showError = meta.touched && meta.error
    return (
        <div className={showError && css.error} >
            <div className={css.title}> {props.title}</div>
            <input {...input} {...newprops} type="text"  />
            {showError && <div className={css.errorLabel}>{meta.error}</div>}
        </div>
    )
}

export default ParameterEditor;