import css from './TextAreaEditor.module.css';

const TextAreaEditor = (props) => {
    return (
        <div>
            <div className={css.title}>{props.title}</div>
            <textarea type="text" name={props.parameter} value={props.value} />
        </div>
    )
}

export default TextAreaEditor;