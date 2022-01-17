import "./ValidateInput.css"
import PropTypes from 'prop-types'


const ValidateInput = (props) => {
    return (
        <div className="validate-input">
            <img src={props.inputIcon} />
            <input type={props.type} placeholder={props.label}></input>
        </div>
    )
}
ValidateInput.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    inputIcon: PropTypes.string,
}

ValidateInput.defaultProps = {

};

export default ValidateInput;