import React, {createContext, useState, useContext, useCallback, ReactNode} from 'react';

type SnackbarType = 'info' | 'success' | 'danger' | 'warning';

interface SnackbarState {
    title: string;
    message: string;
    type: SnackbarType;
    open: boolean;
}

interface SnackbarContextProps {
    snackbar: SnackbarState;
    openSnackbar: (message: string, title: string, type: SnackbarType) => void;
    closeSnackbar: () => void;
}

const SnackbarContext = createContext<SnackbarContextProps | undefined>(undefined);

export const useSnackbar = (): SnackbarContextProps => {
    const context = useContext(SnackbarContext);
    if (!context) {
        throw new Error('useSnackbar must be used within a SnackbarProvider');
    }
    return context;
};

export const SnackbarProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [snackbar, setSnackbar] = useState<SnackbarState>({message: '', title: '', type: 'info', open: false});
    const [timeoutId, setTimeoutId] = useState<any>(null);

    const closeSnackbar = useCallback(() => {
        setSnackbar(prev => ({...prev, open: false}));
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
    }, [timeoutId]);

    const openSnackbar = useCallback((message: string, title: string, type: SnackbarType) => {
        if (snackbar.open) {
            closeSnackbar();
        }
        setSnackbar({message, title, type, open: true});
        const timeRef = setTimeout(() => {
            setSnackbar(prev => ({...prev, open: false}));
        }, 7000);
        setTimeoutId(timeRef);
    }, [snackbar.open, closeSnackbar]);

    return (
        <SnackbarContext.Provider value={{snackbar, openSnackbar, closeSnackbar}}>
            {children}
        </SnackbarContext.Provider>
    );
};
