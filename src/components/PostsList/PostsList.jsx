import React from "react";
import Post from "./Post/Post";
import { baseInstance } from "../../api/instances";
import LoaderHandler from "../../hoc/LoaderHandler";

const PostsList = (props) => {
    const formatDate = (date) => {
        date = new Date(date);
        let day = date.getDate();
        day = day <= 9 ? '0' + day : day;
        let hours = date.getHours();
        hours = hours <= 9 ? '0' + hours : hours;
        let minutes = date.getMinutes();
        minutes = minutes <= 9 ? '0' + minutes : minutes;
        let formatedDate = `${day}.${('0' + (date.getMonth() + 1)).slice(-2)}.` +
            `${date.getFullYear()} ${hours}:${minutes}`;
        return formatedDate;
    };

    return (
        Object.keys(props.posts).map((key) => {
            return <Post
                key={key}
                id={key}
                postTitle={props.posts[key].title}
                time={formatDate(props.posts[key].time)}
            />
        })
    )
};
export default LoaderHandler(PostsList, baseInstance);