import React from "react";


export const AuthContext = createContext()

const Authprovider =({children})=>{
    return(
        <div>
            <AuthContext.Provider value={'aryan'}>
            {children}
            </AuthContext.Provider>
            
        </div>
    )
}

export default Authprovider;