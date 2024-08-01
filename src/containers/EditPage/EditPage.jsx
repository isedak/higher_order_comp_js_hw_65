import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiService } from "../../api/apiServiceClass";
import AddPostForm from "../../components/AddPostForm/AddPostForm";
import './EditPage.css';

const EditPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [editedPost, setEditedPost] = useState({
        title: '',
        text: '',
        time: ''
    });

    const clearErrorMessage = () => {
        setErrorMessage('');
        setShowError(false);
    };

    const getPostById = async () => {
        clearErrorMessage();
        try {
            let response = await apiService.getPostById(params.id);
            setEditedPost(response);
        } catch (error) {
            setErrorMessage(error.message);
            setShowError(true);
        };
    };

    useEffect(() => {
        getPostById()
    }, [params.id]); // eslint-disable-line react-hooks/exhaustive-deps

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setEditedPost(prevState => {
            return { ...prevState, [name]: value }
        });
    };

    const editPost = async (e) => {
        e.preventDefault();
        clearErrorMessage();
        try {
            await apiService.updatePost(params.id, editedPost);
            navigate(`/posts/${params.id}`);
            window.location.reload(false);
        } catch (error) {
            setErrorMessage(error.message);
            setShowError(true);
        };
    };

    const cancelClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/posts/${params.id}`);
    };

    return (
        <div className="EditPage-container">
            <div className="EditPage-column">
                <h1 className="EditPage-title">Edit Post</h1>
                <AddPostForm
                    submit={(e) => editPost(e)}
                    onInputChanged={(e) => inputHandler(e)}
                    cancelClick={(e) => cancelClick(e)}
                    valueTitle={editedPost.title}
                    valueText={editedPost.text}
                    errorText={showError ? errorMessage : null}
                />
            </div>
        </div>
    );
};

export default EditPage;