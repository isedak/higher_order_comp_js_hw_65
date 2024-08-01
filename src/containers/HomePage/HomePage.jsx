import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { apiService } from "../../api/apiServiceClass";
import PostsList from "../../components/PostsList/PostsList";
import './HomePage.css';

const HomePage = () => {
    const [posts, setPosts] = useState({});
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const clearErrorMessage = () => {
        setErrorMessage('');
        setShowError(false);
    };

    const getPosts = async () => {
        clearErrorMessage();
        try {
            const response = await apiService.getPosts();
            setPosts(response);
        } catch (error) {
            setErrorMessage(error.message);
            setShowError(true);
        };
    };

    useEffect(() => {
        getPosts();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="HomePage-container">
            <div className="HomePage-Posts-background">
                <div className="scroll-box">
                    <div className="Posts-column">
                        {showError ? <p className='error-text'>{errorMessage}</p> : null}
                        {!posts || posts === undefined ?
                            <p className='black-error-text'>No posts yet</p>
                            :
                            <PostsList posts={posts} />
                        }
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default HomePage;