import css from './ParameterEditor.module.css';

const ParameterEditor = (props) => {
    return (
        <div>
            <div className={css.title}>{props.title}</div>
            <input type="text" name={props.parameter} value={props.value} />
        </div>
    )
}

export default ParameterEditor;