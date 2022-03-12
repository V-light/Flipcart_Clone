import {react , createContext, useState} from 'react';

export const LoginContext = createContext(null);

const ContextProvider  =({children})=>{
    
    const [showAccount , setShowAccount] = useState('');
    return(
        <LoginContext.Provider value = {{showAccount, setShowAccount}}>
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider;