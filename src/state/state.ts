import { atom, setter, useGlobalValue } from "elum-state/react";

export const REGISTRATION_PAGE = atom({
    key: "reg_page", 
    default: "login",
});