import { baseInstance } from "./instances";

class ApiServiceClass {
    getPosts = async () => {
        try {
            const response = await baseInstance.get('/posts.json');
            return response.data;
        } catch (error) {
            throw (error);
        }
    }
    addPost = async (post) => {
        try {
            await baseInstance.post('/posts.json', post)
        } catch (error) {
            throw (error);
        }
    }
    getPostById = async (id) => {
        try {
            const response = await baseInstance.get(`/posts/${id}.json`);
            return response.data;
        } catch (error) {
            throw (error);
        }
    }
    updatePost = async (id, post) => {
        try {
            await baseInstance.put(`/posts/${id}.json`, post);
        } catch (error) {
            throw (error);
        }
    }
    deletePost = async (id) => {
        try {
            await baseInstance.delete(`/posts/${id}.json`);
        } catch (error) {
            throw (error);
        }
    }
};

export const apiService = new ApiServiceClass();