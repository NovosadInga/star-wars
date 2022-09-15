import PropTypes from 'prop-types';
import cn from 'classnames'
import clear from "./img/clear.svg"
import '../index.css'
import styles from './UiInput.module.css';
const UiInput = ({
    type="text",
    placeholder,
    value,
    handleInputChange,
    classes
}) =>{
    return (
        <div className={cn(styles.wrapper_input, classes)}>
            <input 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange = {(e) => handleInputChange(e.target.value)}
                className={styles.input}
            />
            <div 
                onClick={()=> value && handleInputChange('')}
                className={cn(styles.clear, !value && styles.clear_active)}
            >
                <img  src={clear} alt="Clear"/>
            </div>
        </div>
    )
}

UiInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    classes: PropTypes.string,
}
export default UiInput;