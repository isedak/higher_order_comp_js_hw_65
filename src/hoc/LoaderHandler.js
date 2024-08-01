import React, { Component } from "react";
import Loader from "../components/UI/Loader/Loader";

const LoaderHandler = (WrappedComponent, axiosHandler) => {
    return class extends Component {
        state = { loading: false };        
        requestInterceptor = axiosHandler.interceptors.request.use(req => {
            this.setState({ loading: true });
            return req;
        })
        responseInterceptor = axiosHandler.interceptors.response.use(res => {
            this.setState({ loading: false });
            return res;
        }, function (error) {
            this.setState({ loading: false });
            return Promise.reject(error);
        })
        componentWillUnmount() {
            axiosHandler.interceptors.request.eject(this.requestInterceptor);
            axiosHandler.interceptors.response.eject(this.responseInterceptor);
        }
        render() {
            return (
                <>
                    {this.state.loading ?
                        <Loader />
                        :
                        <WrappedComponent {...this.props} />
                    }
                </>
            )
        }
    }
};

export default LoaderHandler;