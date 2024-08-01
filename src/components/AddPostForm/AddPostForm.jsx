import React from "react";
import { baseInstance } from "../../api/instances";
import LoaderHandler from "../../hoc/LoaderHandler";
import Button from "../UI/Button/Button";
import './AddPostForm.css';

const AddPostForm = (props) => {
    return (
        <form className="form-flex-column"
            onSubmit={(e) => props.submit(e)}>
            <label className="label" htmlFor="title">Title:</label>
            <input type="text"
                className={'input-box'}
                onChange={props.onInputChanged}
                name={"title"}
                value={props.valueTitle}
            />
            <label className="label" htmlFor="text">Description:</label>
            <textarea
                className={'textarea'}
                value={props.valueText}
                onChange={props.onInputChanged}
                name={"text"}
            />
            <div className="btn-group-row">
                <p className='form-error-text'>{props.errorText ? props.errorText : null}</p>
                <Button
                    click={props.cancelClick}
                    buttonClasses={"btn-cancel"}
                    label={'Cancel'} />
                <Button
                    buttonClasses={"btn-save"}
                    disabled={props.valueText.trim() === '' ||
                        props.valueTitle.trim() === '' ? true : false}
                    label={'Save'} />
            </div>
        </form>
    );
};

export default LoaderHandler(AddPostForm, baseInstance);