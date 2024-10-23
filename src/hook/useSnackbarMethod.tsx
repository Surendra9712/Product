import {useSnackbar} from "../provider/SnackbarProvider";

export default function useSnackbarMethods() {
    const {openSnackbar} = useSnackbar();
    const showInfoSnackbar = ({message = '', title = "Info"}) => openSnackbar(message, title, 'info');
    const showSuccessSnackbar = ({message='', title = "Success"}) => openSnackbar(message, title, 'success');
    const showErrorSnackbar = ({message='', title = "Error"}) => openSnackbar(message, title, 'danger');
    const showWarningSnackbar = ({message='', title = "Warning"}) => openSnackbar(message, title, 'warning');

    return {
        showInfoSnackbar,
        showSuccessSnackbar,
        showErrorSnackbar,
        showWarningSnackbar,
    };
};