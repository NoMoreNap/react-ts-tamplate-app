import { Box } from "@mui/system";
import React from "react";
import { useGlobalValue } from "elum-state/react";
import { Collapse } from "@mui/material";
import { REGISTRATION_PAGE } from "../state/state";




export const MainLoginPage = () => {
    const state = useGlobalValue(REGISTRATION_PAGE);
    console.log(state)


    return (
        <Box>

            <Collapse in={state === 'login'}>

            </Collapse>

            <Collapse in={state === 'signup'}>
                
            </Collapse>


        </Box>
    )
}