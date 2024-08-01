import React from "react";
import { Link } from "react-router-dom";
import './Post.css';

const Post = (props) => {
    return (
        <div className="Home-post-row">
            <div className="Home-post-column">
                <p className="time-text">Created on: {props.time}</p>
                <h3 className="Post-title">{props.postTitle}</h3>
                <Link to={`/posts/${props.id}`} className="link-read-more" >{"Read more >>"}</Link>                
            </div>
        </div>
    )
};

export default Post;