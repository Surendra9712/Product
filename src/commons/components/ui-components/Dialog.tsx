import React, {ReactNode, useEffect} from 'react';

interface DialogProps {
    isOpen: boolean,
    children: ReactNode
}

const Dialog = ({isOpen, children}: DialogProps) => {
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        const originalPaddingRight = document.body.style.paddingRight;
        const handleScrollLock = () => {
            const hasOverflow = document.body.scrollHeight > window.innerHeight;
            if (isOpen && hasOverflow) {
                document.body.style.overflow = 'hidden'; // Disable scroll
                document.body.style.paddingRight = '18px';
            } else {
                document.body.style.overflow = originalOverflow; // Enable scroll
                document.body.style.paddingRight = originalPaddingRight;
            }
        };

        handleScrollLock(); // Check overflow when dialog opens or closes

        // Cleanup function to reset styles on unmount
        return () => {
            document.body.style.overflow = originalOverflow;
            document.body.style.paddingRight = originalPaddingRight;
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="dialog-overlay flex justify-content-center align-items-center bg-light color-primary index-9 fixed insect-0">
            <div className="dialog surface-100 p-md radius-md">
                {children}
            </div>
        </div>
    );
};

export default Dialog;
