import React from 'react';
import {IconButton, Box} from '@mui/material'
import {useSnackbar} from "notistack";
import {IOpenSnackbarProps, ISnackbarCloseButton} from "./useSnackbar.i";
import CloseIcon from '@mui/icons-material/Close';


export const useEnqueueSnackbar = () => {
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();
    const openSnackbar = ({message, variant = 'default'}: IOpenSnackbarProps) => {
        enqueueSnackbar(message, {variant});
    };

    return {openSnackbar, closeSnackbar};
};

export const SnackbarCloseButton: React.FC<ISnackbarCloseButton> = ({snackbarKey}) => {
    const {closeSnackbar} = useEnqueueSnackbar();
    console.log(CloseIcon)

    return (
        <IconButton onClick={() => closeSnackbar(snackbarKey)}>
            <CloseIcon/>
        </IconButton>
    )
}