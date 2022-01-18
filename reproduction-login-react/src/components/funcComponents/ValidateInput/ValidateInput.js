import "./ValidateInput.css"
import PropTypes from 'prop-types'


const ValidateInput = (props) => {

    return (
        <div className="validate-input">

            <input type={props.type} placeholder={props.label} required></input>
            <span className="input-span">
                <img src={props.inputIcon} />
            </span>

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