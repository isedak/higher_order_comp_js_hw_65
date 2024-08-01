import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { apiService } from "../../api/apiServiceClass";
import PostDetails from "../../components/PostDetails/PostDetails";
import './PostDetailsPage.css';

const PostDetailsPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const clearErrorMessage = () => {
        setErrorMessage('');
        setShowError(false);
    };

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

    const getPostById = async () => {
        clearErrorMessage();
        try {
            let response = await apiService.getPostById(params.id);
            let time = formatDate(response.time);
            response.time = time;
            setPost(response);
        } catch (error) {
            setErrorMessage(error.message);
            setShowError(true);
        };
    };

    useEffect(() => {
        getPostById()
    }, [params.id]); // eslint-disable-line react-hooks/exhaustive-deps

    const navigateToEditPage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/posts/${params.id}/edit`);
    };

    const deletePost = async () => {
        clearErrorMessage();
        try {
            await apiService.deletePost(params.id);
            navigate('/posts');
            window.location.reload(false);
        } catch (error) {
            setErrorMessage(error.message);
            setShowError(true);
        }
    };

    return (
        <>
            <div className="PostDetails-background">
                <div className="PostDetails-scroll-box">
                    <div className="PostDetails-column">
                        {showError ? <p className='PostDetails-error-text'>{errorMessage}</p> : null}
                        <PostDetails
                            title={post.title}
                            time={post.time}
                            text={post.text}
                            deletePost={() => deletePost()}
                            navigateToEditPage={(e) => navigateToEditPage(e)}
                        />
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default PostDetailsPage;