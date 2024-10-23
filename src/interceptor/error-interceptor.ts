import {useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import useSnackbarMethods from "../hook/useSnackbarMethod";

export const ErrorInterceptor = () => {
    const navigate = useNavigate()
    const {showErrorSnackbar} = useSnackbarMethods()
    const interceptorId = useRef<number | null>(null);
    useEffect(() => {
        interceptorId.current = axios.interceptors.response.use(undefined, (error) => {
            const err = error.response;
            if (err.status !== 417) {
                showErrorSnackbar({message: err.data.message});
            }
            return Promise.reject(error);
        });

        return () => {
            axios.interceptors.response.eject(interceptorId.current as number);
        };
    }, [navigate]);

    return null;
};