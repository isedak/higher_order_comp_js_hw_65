import React from "react";
import { baseInstance } from "../../api/instances";
import LoaderHandler from "../../hoc/LoaderHandler";
import Button from "../UI/Button/Button";

const PostDetails = (props) => {
    return (
        <>
            <h3 className="PostDetails-title">{props.title}</h3>
            <p className="PostDetails-time-text">Created on: {props.time}</p>
            <p>{props.text}</p>
            <div className="PostDetails-btn-group-row">
                <Button
                    click={props.deletePost}
                    buttonClasses={"btn-delete"}
                    label={'Delete'} />
                <Button
                    buttonClasses={"btn-edit"}
                    click={props.navigateToEditPage}
                    label={'Edit'} />
            </div>
        </>
    );
};

export default LoaderHandler(PostDetails, baseInstance);