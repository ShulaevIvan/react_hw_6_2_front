import React from "react";


const FormInput = () => {
    return (
        <React.Fragment>
            <div className='form-input-wrap'>
                <div className="form-input-title"><h5>New Note</h5></div>
                <div className="textarea-wrap">
                    <textarea></textarea>
                    <span className="send-btn"></span>
                </div>
            </div>
        </React.Fragment>
    );
}


export default FormInput;