import React from "react";
import { MainWrapperBox } from "../styles/MainWrapperBox";

export const MainWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <MainWrapperBox>
            {children}
        </MainWrapperBox>
    )
} 