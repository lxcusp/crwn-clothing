import './form-input.styles.scss'

const FormInput = ({ label, inputOptions }) => {
    return (
        <div className="group">
            <input className="form-input" {...inputOptions} />
            {/* if this input put below the label, the subsequent selector is not gonna work,
            because the selector is looking for general sibling component with the label after the input,
            but we want it when cursor locate the field, the label shrink*/}

            {label && //if label exists, then render the label below
                <label className={`${inputOptions.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
                //when user tries to type something in(the value > 0), the label shrink
            }
        </div>
    )
}

export default FormInput