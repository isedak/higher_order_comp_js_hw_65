import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiService } from "../../api/apiServiceClass";
import AddPostForm from "../../components/AddPostForm/AddPostForm";
import './AddPage.css';

const AddPage = () => {
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [newPost, setNewPost] = useState({
        title: '',
        text: ''
    });

    const clearErrorMessage = () => {
        setErrorMessage('');
        setShowError(false);
    };

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setNewPost(prevState => {
            return { ...prevState, [name]: value }
        });
    };

    const addPost = async (e) => {
        e.preventDefault();
        clearErrorMessage();
        try {
            let post = { ...newPost };
            post.time = new Date();
            await apiService.addPost(post);
            navigate('/posts');
            window.location.reload(false);
        } catch (error) {
            setErrorMessage(error.message);
            setShowError(true);
        };
    };

    const cancelClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate('/');
    };

    return (
        <div className="AddPage-container">
            <div className="AddPage-column">
                <h1 className="AddPage-title">Add a New Post</h1>
                <AddPostForm
                    submit={(e) => addPost(e)}
                    onInputChanged={(e) => inputHandler(e)}
                    cancelClick={(e) => cancelClick(e)}
                    valueTitle={newPost.title}
                    valueText={newPost.text}
                    errorText={showError ? errorMessage : null}
                />                
            </div>
        </div>
    )
};

export default AddPage;