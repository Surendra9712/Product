import Dialog from "./Dialog";
import {AppButton, AppIconButton, AppText, AppTitle} from "../index";
import {IconDismiss} from "../icons/icons";
import React from "react";

interface ConfirmationDialogProps {
    isOpen: boolean,
    title: string,
    message: string;
    close: () => void
    confirm: () => void
}

export default function ConfirmationDialog({isOpen, title, message, confirm, close}: ConfirmationDialogProps) {
    return (
        <Dialog isOpen={isOpen}>
            <div className="dialog-header">
                <AppTitle as='h5'>{title}</AppTitle>
                <AppIconButton onClick={close} icon={IconDismiss} variant={'subtle'} radius={'rounded'}/>
            </div>
            <AppText className="dialog-content" size={'lg'} as={'p'}>{message}</AppText>
            <div className="dialog-footer">
                <AppButton variant={'light'} label={'Cancel'} onClick={close}/>
                <AppButton label={'Confirm'} onClick={confirm}/>
            </div>
        </Dialog>
    )
}