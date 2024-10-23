import {useSnackbar} from "../../provider/SnackbarProvider";
import {IconDismiss, IconBan, IconInfoCircle, IconCheckCircle, IconExclamationCircle} from "./icons/icons";
import {AppIconButton, AppText, AppTitle} from "./index";

export default function Snackbar(){
    const {snackbar, closeSnackbar} = useSnackbar();

    const getIcon = () => {
        switch (snackbar.type) {
            case "success":
                return IconCheckCircle;
            case "info":
                return IconInfoCircle;
            case "danger":
                return IconBan;
            default:
                return IconExclamationCircle
        }
    }

    return (
        <div className={`snackbar flex align-items-start gap-xs ${snackbar.open ? 'show' : ''} border-${snackbar.type}`}>
            <AppText className='alert-icon' color={snackbar.type} as={'span'}>{getIcon()}</AppText>
            <div className="flex flex-column gap-3xs">
                <AppTitle as={'h6'} color={snackbar.type}>{snackbar.title}</AppTitle>
                <AppText className={'break-word'}>{snackbar.message}</AppText>
            </div>
            <AppIconButton size={'xs'}
                           radius={'rounded'}
                           icon={IconDismiss}
                           variant={'subtle'}
                           onClick={closeSnackbar}></AppIconButton>
        </div>
    );
};