import React, {useState, createContext} from "react";
export const Context = createContext();
export const ContextProvider = (props) => {
    const [email, setEmail] = useState("");
    const [secret, setSecret] = useState("");
    const [name, setName] = useState("");
    const value = {
        name, setName,
        email, setEmail,
        secret, setSecret,
    };
    return <Context.Provider value = {value}>{props.children}</Context.Provider>;
    };
    